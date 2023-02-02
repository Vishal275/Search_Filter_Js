const input = document.getElementById("search");
input.addEventListener("keyup", search);

const stateName = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam	Dispur",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand	Ranchi",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

let text = "";
for (let i = 0; i < stateName.length; i++) {
  text += "<li>" + stateName[i] + "</li>";
  document.getElementById("list").innerHTML = text;
}

function search() {
  const inputValue = input.value.toLowerCase();
  const li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    if (li[i].innerHTML.toLowerCase().includes(inputValue)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}