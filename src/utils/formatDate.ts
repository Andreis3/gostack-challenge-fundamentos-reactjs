const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt').format(new Date(value));

export default formatDate;
