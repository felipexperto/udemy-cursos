class DateHelper {

  constructor() {
    throw new Error('Esta classe não pode ser instanciada.')
  }

  static formatStringToDate(str) {

    if (!/\d{4}-\d{2}-\d{2}/.test(str))
      throw new Error('Parâmetro de data inválido.');

    const fullDate = str.split('-');
    const [year, month, day] = fullDate;

    return {
      year: parseInt(year),
      month: parseInt(month) - 1,
      day: parseInt(day)
    }
  }

  static formatDateToStringPtBr(year, month, day) {
    return `${day}/${month+1}/${year}`;
  }

  static formatDateUTCtoStringPtBr(date) {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
  }
}