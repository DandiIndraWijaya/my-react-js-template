
function truncate (text: string, limit: number, type: string): string {
  if (type === 'ellipsis') {
    if (text.length <= limit) {
      return text;
    }

    return text.slice(0, limit) + '...';
  }

  return text.slice(0, limit);
}

export default truncate;
