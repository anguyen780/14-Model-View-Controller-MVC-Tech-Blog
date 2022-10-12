module.exports = {
  format_date: (date) => {
    const d = new Date();
    let newDate = d.toLocaleDateString();
    return newDate;
  }
};
