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

const RepositoryLeo = new Repository();
//Prueba de push
RepositoryLeo.createActivity("Leo", "ramos", "imgleo");
console.log(RepositoryLeo);
RepositoryLeo.createActivity("martin", "ramos", "imgleo");
console.log(RepositoryLeo);
RepositoryLeo.deleteActivity(0);
console.log(RepositoryLeo);

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

  const containerCard = document.createElement("div");
  containerCard.appendChild(contentCard);
  containerCard.className = "card_activity";
  containerCard.id = id;

  const contentCard = document.createElement("div");
  contentCard.appendChild(contentCardInfo);
  contentCard.appendChild(contentCardImg);
  contentCard.appendChild(contentCardButton);
  contentCard.className = "card_content";

  const contentCardInfo = document.createElement("div");
  contentCardInfo.appendChild(cardTitle);
  contentCardInfo.appendChild(cardDescription);
  contentCardInfo.className = "card_inf";

  const contentCardImg = document.createElement("div");
  contentCardImg.appendChild(cardImg);
  contentCardImg.className = "card_img";

  const contentCardButton = document.createElement("div");
  contentCardButton.className = "card_button";
  return containerCard;
}

function allActivities() {
  const containerActivities = document.getElementById("container_activities");
  containerActivities.innerHTML = "";

  const activities = Repository.getAllActivities();
}
