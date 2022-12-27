var dropDownValue = document.getElementById("dropDown");

dropDownValue.onchange = function()
{
alert(this.value);
if(this.selectedIndex !== 0)
{
    window.location.hash = this.value;
}
};
