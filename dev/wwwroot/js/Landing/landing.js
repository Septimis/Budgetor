const sellerPointWrappersText = document.querySelectorAll('.sellerPointSubWrapper-Text');
const sellerPointWrappers = document.querySelectorAll('.sellerPointWrappers');
const budgetorGreen = "rgb(0, 88, 40)";
const budgetorGray = "#f5f5f5";
const prefBorderRadius = "8px";

sellerPointWrappers.forEach((element, index) => {
    index % 2 === 0 ? element.style.flexDirection = "row" : element.style.flexDirection = "row-reverse";
});

//set animation on sellerPointWrappersText when scrolled into view
const sellerPointObserverL = new IntersectionObserver(entries => {
    entries.forEach(entry=> {
        if(entry.isIntersecting) entry.target.classList.add('sellerAnimationL');
    });
});
const sellerPointObserverR = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('sellerAnimationR');
    });
});

sellerPointWrappersText.forEach((element, index) => {
    //add observers based on which element it is
    index % 2 === 0 ? sellerPointObserverL.observe(element) : sellerPointObserverR.observe(element);

    if(index == 0) {
        element.style.borderRadius = "0px 0px " + prefBorderRadius + " 0px";
        element.style.marginTop = "0px";
        return; //in a JS forEach loop, return is equivilent to 'continue'
    }
    if(index + 1 == sellerPointWrappersText.length && index % 2 === 0) {
        element.style.borderRadius = "0px " + prefBorderRadius + " 0px 0px";
        element.style.marginBottom = "0px";
        return;
    }
    if(index + 1 === sellerPointWrappersText.length && index % 2 === 1) {
        element.style.borderRadius = prefBorderRadius + " 0px 0px 0px";
        element.style.marginBottom = "0px";
        return;
    }
    index % 2 === 0 ? element.style.borderRadius = "0px " + prefBorderRadius + " " + prefBorderRadius + " 0px" : element.style.borderRadius = prefBorderRadius + " 0px 0px " + prefBorderRadius;
});