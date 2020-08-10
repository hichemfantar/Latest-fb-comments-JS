let commentList = (function () {
  if (document.getElementsByClassName("_2pm3 _21q1 _p")[0]) {
    document.getElementsByClassName("_2pm3 _21q1 _p")[0].click();
    setTimeout(
      document.querySelector('[data-ordering="RECENT_ACTIVITY"]').click(),
      1000
    );
  } else if (document.getElementsByClassName("_21q1 _p")[0]) {
    document.getElementsByClassName("_21q1 _p")[0].click();
    setTimeout(
      document.querySelector('[data-ordering="RECENT_ACTIVITY"]').click(),
      1000
    );
  }

  let runMe = () => {
    let list;
    if (document.getElementsByClassName("_7791")[0]) {
      list = document.getElementsByClassName("_7791")[0].children;
    } else if (document.getElementsByClassName("_77bp")[0]) {
      list = document.getElementsByClassName("_77bp")[0].children;
    }
    // let list = document.getElementsByClassName("_7791")[0].children;
    let alist = Array.from(list);
    let arrayStore = [];
    let i = 0;
    alist.forEach((element) => {
      let comment = "";
      let name = element.getElementsByClassName("_6qw4")[0].textContent;
      if (element.getElementsByClassName("_3l3x")[0]) {
        comment = element.getElementsByClassName("_3l3x")[0].textContent;
      }
      let arrayItem = {
        name: name,
        comment: comment,
      };

      arrayStore[i] = arrayItem;
      i++;
    });
    console.log(arrayStore);
    commentList = arrayStore;
    return commentList;
  };
  setTimeout(runMe, 5000);
  return 0;

  // document.getElementsByClassName("_7791")[0].click();
})();
