# IEC Website

A modern, responsive website developed for the **Innovation and Entrepreneurship Conference (IEC)**. The platform provides information about the conference, enables participant registration, and integrates digital tools to enhance the user and admin experience.

## 🌍 Purpose

The IEC Website serves as a central hub for:

* Showcasing innovation and entrepreneurship in Africa.
* Enabling **delegate and exhibitor registration**.
* Providing quick access to community channels (WhatsApp group & channel).
* Sharing conference updates and details in a simple yet classy design.

## ✨ Features

* 🎨 **Modern UI/UX** with IEC brand colors and simple, classy styling.
* 🖼️ **Dynamic homepage slides** with African innovation & entrepreneurship images.
* 📝 **Registration Form** – securely collects participant details.
* 📊 **Admin Panel** – accessible via `/admin`, where registration data can be viewed, exported, and downloaded as Excel.
* 💸 **Updated Pricing** – Exhibitor: KES 100,000 (includes 2 people per booth), Delegate: KES 10,000 per person.
* 🔗 **Community Integration** – direct links to join WhatsApp Group and Channel.
* ❌ Removed clutter sections such as *Featured Event*, *Success Stories*, and redundant homepage content.

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript
* **Backend**: Node.js / PHP (depending on implementation)
* **Database**: SQLite / MySQL (depending on setup)
* **Hosting**: Initially built on Replit, deployable to GitHub Pages, Netlify, or a local server.

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/iec-website.git
cd iec-website
```

### Run Locally

If static:

```bash
open index.html
```

If backend included (Node.js / PHP), use:

```bash
# Example Node.js
npm install
npm start

# Example PHP
php -S localhost:8000
```

### Admin Access

To view registrations:

```url
http://localhost:8000/admin
```

From here, you can export participant data into Excel.

## 📂 Project Structure

```
iec-website/
│── index.html
│── about.html
│── register.html
│── /assets
│    ├── css/
│    ├── js/
│    ├── images/
│── /admin
│    ├── index.php (or index.js)
│    ├── export_excel.php
```

## 📸 Screenshots

*(Add screenshots of homepage, registration page, and admin dashboard here)*

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

## 📜 License

This project is licensed under the MIT License.
