class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  //Metodos

  //un metodo que reciba datos de una actividad, cree una actividad nueva y la guarde en su array
  getAllActivities() {
    return this.activities;
  }

  // un metodo que le permita retornar todas las actividades
  createActivity(title, description, imgUrl) {
    const id = this.id++;
    //TODO CREAMOS UNA INSTANCIA
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  // un metodo que le permita filtrar las activdades

  //eliminar activities
  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

// const RepositoryLeo = new Repository();
// //Prueba de push
// RepositoryLeo.createActivity("Leo", "ramos", "imgleo");
// console.log(RepositoryLeo);
// RepositoryLeo.createActivity("martin", "ramos", "imgleo");
// console.log(RepositoryLeo);
// RepositoryLeo.deleteActivity(0);
// console.log(RepositoryLeo);

const repository = new Repository();

//funcion button delete
// function handlerButtonCardDelete(event) {
//   const deleteButtonId = event.target.id;
//   const activityId = deleteButtonId;
//   repository.deleteActivity(activityId);
//   allActivities();
// }

function handlerButtonCardDelete(event) {
  const containerCard = event.target.closest(".card_activity");
  const activityId = containerCard.id;
  repository.deleteActivity(parseInt(activityId));
  allActivities();
}

function cardActivity(activity) {
  const { id, title, description, imgUrl } = activity;
  const cardTitle = document.createElement("p");
  cardTitle.innerHTML = title;
  cardTitle.className = "card_title";

  const cardDescription = document.createElement("p");
  cardDescription.innerHTML = description;
  cardDescription.className = "card_description";

  const cardImg = document.createElement("img");
  cardImg.src = imgUrl;
  cardImg.className = "card_img";

  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.className = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.className = "delete";
  deleteButton.id = id;
  deleteButton.addEventListener("click", handlerButtonCardDelete);

  const contentCardButton = document.createElement("div");
  contentCardButton.className = "card_button";
  contentCardButton.appendChild(editButton);
  contentCardButton.appendChild(deleteButton);

  const contentCardImg = document.createElement("div");
  contentCardImg.appendChild(cardImg);
  contentCardImg.className = "card_img";

  const contentCardInfo = document.createElement("div");
  contentCardInfo.appendChild(cardTitle);
  contentCardInfo.appendChild(cardDescription);
  contentCardInfo.className = "card_inf";

  const contentCard = document.createElement("div");
  contentCard.appendChild(contentCardInfo);
  contentCard.appendChild(contentCardImg);
  contentCard.appendChild(contentCardButton);
  contentCard.className = "card_content";

  const containerCard = document.createElement("div");
  containerCard.appendChild(contentCard);
  containerCard.className = "card_activity";
  containerCard.id = id;

  return containerCard;
}

//recorremos en reposity y lo convertimos en html

function allActivities() {
  const containerActivities = document.getElementById("container_activities");
  containerActivities.innerHTML = "";

  const activities = repository.getAllActivities();
  const htmlActivities = activities.map((activity) => cardActivity(activity));

  htmlActivities.forEach((htmlCard) => {
    containerActivities.appendChild(htmlCard);
  });
}

//creamos la funcion buuton para agregar info
function handlerButtonCard(event) {
  event.preventDefault();
  const inputTitle = document.getElementById("input_title");
  const inputDescription = document.getElementById("area_description");
  const inputImg = document.getElementById("input_img");

  const titleValue = inputTitle.value;
  const areaValue = inputDescription.value;
  const imgValue = inputImg.value;

  if (!titleValue || !areaValue || !imgValue) {
    alert("Por favor, todos los campos son obligatorios");
  } else {
    repository.createActivity(titleValue, areaValue, imgValue);
    allActivities();
    inputTitle.value = "";
    inputDescription.value = "";
    inputImg.value = "";
  }
}

//creamos el boton para pushear

const cardButton = document.getElementById("add_button");
cardButton.addEventListener("click", handlerButtonCard);
