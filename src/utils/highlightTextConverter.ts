/**
 * Convert texts from highlight api
 * @param text - Text to be convert
 * @reutns Converted text
 */

export function highlightTextConverter(text: string): string {
  switch (text){
    case 'alert':
        return '* Meta longe de ser batida'
    case 'success':
        return '* A meta do mês foi batida! Parabéns!'
    case 'warning':
        return '* Falta pouco, vamos lá!'
    default:
        return '* Sem dados no momento'
  }
}
