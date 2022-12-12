"use strict"

window.onload = function () {
    multiSelectDropDown();
    searchByCategory();
    
    showCategorySearch();
    hideCategorySearch();
    hideMultiSelect(); 
    showMultiSelect();
    showTable(); 
    hideTable();

    document.getElementById("oneSlct").onchange = selectOneOnChange;
    document.getElementById("clearBtn").onclick = clearButton;
}

function multiSelectDropDown() {
    const oneSelect = document.getElementById("oneSlct");
    let multiOption = document.createElement("option");
    let categoryOption = document.createElement("option");
    let selectOneOption = document.createElement("option");


    multiOption.value = "";
    selectOneOption.textContent = "Select One...";
    categoryOption.textContent = "Search by Category";
    multiOption.textContent = "View All";

    oneSelect.appendChild(selectOneOption);
    oneSelect.appendChild(categoryOption);
    oneSelect.appendChild(multiOption);
}

function searchByCategory() {
    const categorySelect = document.getElementById("categorySlct");
    let categoryDrop = document.createElement("option");

    categoryDrop.value = "";
    categoryDrop.textContent = "Select a Category";

    categorySelect.appendChild(categoryDrop);

    fetch("http://localhost:8081/api/categories")
        .then(response => response.json())
        .then(categories => {
            let categoriesLength = categories.length;
            for (let i = 0; i < categoriesLength; i++) {
                let catOptions = document.createElement("option");
                catOptions.value = categories[i];
                catOptions.textContent = categories[i].name;

                categorySelect.appendChild(catOptions);
            }
        })
}

function showCategorySearch() {
    document.getElementById("categoryContainer").style.display = "block";
}

function hideCategorySearch() {
    document.getElementById("categoryContainer").style.display = "none";
}

function showMultiSelect() {
    document.getElementById("oneSlct").style.display = "block";
}

function hideMultiSelect() {
    document.getElementById("oneSlct").style.display = "none";
}

function showTable(){
    document.getElementById("tableContainer").style.display = "block"; 
}

function hideTable(){
    document.getElementById("tableContainer").style.display = "none"; 
}

function selectOneOnChange() {
    let multiCategory = document.getElementById("oneSlct").value;
    if (multiCategory == "Search by Category"){
        showCategorySearch();
        hideMultiSelect();  
        hideTable();
    }

    else (multiCategory == "View All");{
    const tableBody = document.getElementById("tbody");
    tableBody.innerHTML = "";

    fetch("http://localhost:8081/api/products")
        .then(response => response.json())
        .then(products => {
            for (let p in products) {
                let tableRow = document.createElement("tr");

                tableBody.appendChild(tableRow);
                //-----------------------------------

                let productName = document.createElement("td");
                productName.innerHTML = products[p].productName;
                tableRow.appendChild(productName);

                let unitPrice = document.createElement("td");
                unitPrice.innerHTML = products[p].unitPrice;
                tableRow.appendChild(unitPrice);

                let inStock = document.createElement("td");
                inStock.innerHTML = products[p].unitsInStock;
                tableRow.appendChild(inStock);

                let supplier = document.createElement("td");
                supplier.innerHTML = products[p].supplier;
                tableRow.appendChild(supplier);

                let discontinue = document.createElement("td");
                discontinue.innerHTML = products[p].discontinued;
                tableRow.appendChild(discontinue);

                showTable();
            }
        })
    }
    
}

function clearButton() {
    document.getElementById("oneSlct").value = "Select One...";
    showMultiSelect();
    hideCategorySearch();
    hideTable();
}