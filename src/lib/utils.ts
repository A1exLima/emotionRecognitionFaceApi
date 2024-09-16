export function translateExpressionToEmoji(expression: string) {
  switch (expression) {
    case 'happy':
      return 'Feliz'
    case 'sad':
      return 'Triste'
    case 'angry':
      return 'Nervoso'
    case 'disgusted':
      return 'Enojado'
    case 'fearful':
      return 'Com medo'
    case 'surprised':
      return 'Surpreso'
    case 'neutral':
      return 'Neutro'
    default:
      return '...'
  }
}
