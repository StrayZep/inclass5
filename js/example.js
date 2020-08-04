// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName("ul")[0];
var item_end = document.createElement("li");
var item_end_text = document.createTextNode("cream");
item_end.appendChild(item_end_text);
list.appendChild(item_end);

// ADD NEW ITEM START OF LIST
var item_start = document.createElement("li");
var item_start_text = document.createTextNode("kale");
item_start.appendChild(item_start_text);
list.insertBefore(item_start, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listitems = document.getElementsByTagName("li");
for (let item of listitems) {
    item.classList.add("cool");
};

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var count = document.getElementsByClassName("cool").length;
var count_span = document.createElement("span");
var count_text = document.createTextNode(count);
count_span.appendChild(count_text);
document.getElementsByTagName("h2")[0].appendChild(count_span);