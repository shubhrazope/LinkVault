# LinkVault

**LinkVault** is a **Universal Link Organizer & Smart Bookmark Manager** built using **Spring Boot**, **PostgreSQL**, **HTML**, **CSS**, and **JavaScript**. It helps users save, organize, and search bookmarks efficiently.

---

## Demo Video

Watch the full walkthrough of LinkVault:

[Watch Demo Video](https://github.com/shubhrazope/LinkVault/blob/main/assets/LinkVault_Demo.mp4?raw=true)

---

## Project Structure
```markdown
C:.
├── assets
│   └── LinkVault_Demo.mp4
│
├── LinkVault
│   ├── .gitattributes
│   ├── .gitignore
│   ├── HELP.md
│   ├── mvnw
│   ├── mvnw\.cmd
│   ├── pom.xml
│   ├── .idea/
│   ├── .mvn/
│   ├── assets/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/LinkVault/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repo/
│   │   │   │   └── service/
│   │   │   └── resources/
│   │   │       ├── static/
│   │   │       └── templates/
│   │   └── test/
│   └── target/
│
└── LinkVault-ui
├── add-bookmark.html
├── dashboard.html
├── edit-bookmark.html
├── index.html
├── linkvault-ui.zip
├── images/
├── script/
└── styles/
```

---

## Features

- Add, edit, and delete bookmarks.
- Categorize bookmarks with descriptions.
- Search bookmarks by title, URL, description, or category.
- User login and authentication.
- Minimalistic and responsive UI.

---

## Technology Stack

- **Backend:** Spring Boot, Java, JPA/Hibernate  
- **Database:** PostgreSQL  
- **Frontend:** HTML, CSS, JavaScript  
- **Build Tool:** Maven  

---

## Application Properties

Add the following in `LinkVault/src/main/resources/application.properties`:

```properties
spring.application.name=LinkVault

spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect

server.port=${PORT:8080}
````

Set environment variables:

* `DB_URL` – PostgreSQL URL
* `DB_USERNAME` – Database username
* `DB_PASSWORD` – Database password
* `PORT` – (Optional) server port

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
```

2. Set your PostgreSQL environment variables.
3. Run the Spring Boot backend:

```bash
cd LinkVault
./mvnw spring-boot:run
```

4. Open the frontend:

```text
LinkVault-ui/index.html
```
