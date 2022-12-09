"use strict"

window.onload = function(){
    multiSelectDropDown();
    searchByCategory(); 
    viewAllDropDown();

    // Create hide & show functions 
    // Create onchange events for the select 
    // Make the tables for the information 
    // Link the API to the dropdowns 


    document.getElementById("oneSlct").onchange = selectOneOnChange;
    
}

function multiSelectDropDown(){
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

function searchByCategory(){
    const categorySelect = document.getElementById("categorySlct"); 
    let categoryDrop = document.createElement("option"); 

    categoryDrop.value = "";
    categoryDrop.textContent = "Search by Category"; 


    categorySelect.appendChild(categoryDrop);
}

function viewAllDropDown(){
    const viewAllDrop = document.getElementById("viewAll"); 
    let viewDropDown = document.createElement("option"); 

    viewDropDown.value = "";
    viewDropDown.textContent = "View All"; 


    viewAllDrop.appendChild(viewDropDown);
}

function selectOneOnChange(){

}