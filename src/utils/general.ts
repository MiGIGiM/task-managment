import { ETagColor } from '../components/Tag'

export const getTagColor = (tag: string): ETagColor => {
  switch (tag) {
    case 'ANDROID':
    case 'NODE_JS':
      return ETagColor.green
    case 'REACT':
      return ETagColor.blue
    case 'RAILS':
    case 'YESTERDAY':
      return ETagColor.red
    case 'IOS':
    default:
      return ETagColor.base
  }
}

export const getDateString = (date: Date): string => {
  const dt = new Date(date)
  const today = new Date()
  const yesterday = new Date(today)
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  yesterday.setDate(yesterday.getDate() - 1)

  if (dt === today) return 'TODAY'

  if (
    yesterday.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) ===
    dt.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  )
    return 'YESTERDAY'

  return dt.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const getTaskPoints = (points: string): string => {
  switch (points) {
    case 'EIGHT':
      return '8 Points'
    case 'FOUR':
      return '4 Points'
    case 'ONE':
      return '1 Point'
    case 'TWO':
      return '2 Points'
    default:
      return '0 Points'
  }
}
