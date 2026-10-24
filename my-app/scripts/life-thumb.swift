// Resize an image with ImageIO, honouring EXIF/HEIC orientation, and write a PNG.
// usage: life-thumb <src> <out.png> <size> [square]
//   size   - longest edge, or the side length when "square" is passed
//   square - center-crop to a size x size square
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
let size = Int(args[3])!
let square = args.count > 4 && args[4] == "square"

let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: args[1]) as CFURL, nil)!
let props = CGImageSourceCopyPropertiesAtIndex(src, 0, nil) as! [CFString: Any]
let width = props[kCGImagePropertyPixelWidth] as! Int
let height = props[kCGImagePropertyPixelHeight] as! Int

// For a square crop the short edge must reach `size`, so scale the long edge to match.
let maxEdge = square ? size * max(width, height) / min(width, height) : size
var image = CGImageSourceCreateThumbnailAtIndex(src, 0, [
  kCGImageSourceCreateThumbnailFromImageAlways: true,
  kCGImageSourceCreateThumbnailWithTransform: true,
  kCGImageSourceThumbnailMaxPixelSize: maxEdge,
] as CFDictionary)!

if square {
  let side = min(image.width, image.height)
  image = image.cropping(to: CGRect(
    x: (image.width - side) / 2, y: (image.height - side) / 2, width: side, height: side))!
}

let dst = CGImageDestinationCreateWithURL(
  URL(fileURLWithPath: args[2]) as CFURL, UTType.png.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(dst, image, nil)
CGImageDestinationFinalize(dst)
