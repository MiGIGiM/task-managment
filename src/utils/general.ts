export const getTagColor = (tag: string) => {
  switch (tag) {
    case 'ANDROID':
    case 'NODE_JS':
      return 'bg-secondary-4/10 fill-secondary-4 text-secondary-4'
    case 'REACT':
      return 'bg-[#2F61BF]/10 fill-[#2F61BF] text-[#2F61BF]'
    case 'RAILS':
    case 'YESTERDAY':
      return 'bg-primary-4/10 fill-primary-4 text-primary-4'
    case 'IOS':
    default:
      return 'bg-neutral-2/10 fill-neutral-1 text-neutral-1'
  }
}

export const getDateString = (date: Date): string => {
  const dt = new Date(date)
  const today = new Date()
  const yesterday = new Date(today)

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
