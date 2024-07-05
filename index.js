/*
const title = document.getElementById("Title")

function setTitleSize()
{
    title.style.fontSize = "0px"
    let clientHeight = document.getElementById("Header").clientHeight;
    // Set Title font size to height of the div
    title.style.fontSize = "" + clientHeight + "px"
    console.log(title.style.fontSize + ", " + clientHeight)
}

window.onresize = function() {
    setTitleSize();
};
*/

const title = document.getElementById("Title");
const subTitle = document.getElementById("SubTitle");


window.onload = function() {
    // Emtpy the text
    title.textContent = "\u00a0";
    subTitle.textContent = "\u00a0"

    let titleText = title.getAttribute("data-text");
    let subTitleText = subTitle.getAttribute("data-text");

    let i = 0;
    let j = 0;

    let id = setInterval(function() {
        if (i == 0) {title.textContent = "";}

        if (i < titleText.length)
        {
            title.style.borderRight = "1px solid white";
            title.textContent += titleText[i];
            i++;
        }
        else
        {
            title.style.borderRight = "0px";
            clearInterval(id);

            setTimeout(function() {
                let id2 = setInterval(function() {
                    if (j == 0) {subTitle.textContent = "";}

                    if (j < subTitleText.length)
                    {
                        subTitle.style.borderRight = "1px solid white";
                        subTitle.textContent += subTitleText[j];
                        j++
                    }
                    else
                    {
                        subTitle.style.borderRight = "0px";
                        clearInterval(id2);
                    }
                }, 150);
            }, 500);
        }
    }, 150);
};
