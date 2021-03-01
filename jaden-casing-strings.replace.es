String.prototype.toJadenCase =
  function () {
    return `${this}`
      .replace(
        /(?:^|\s)\w/g
       ,c => c.toUpperCase() ) }
