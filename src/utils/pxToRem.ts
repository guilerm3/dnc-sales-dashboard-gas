/** 
 * Convert Pixels to rem
 * @param pixels - Pixels value to be convert
 * @reutns The converted rem value
*/

export function pxToRem(pixels: number): string{
    return `${pixels / 16}rem`
}