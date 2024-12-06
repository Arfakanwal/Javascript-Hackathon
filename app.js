// Import required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCZzSFu3mWs2sQVy1AGfPugEzlnYaLmqM",
    authDomain: "blogs-803e6.firebaseapp.com",
    projectId: "blogs-803e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test Firestore connection
async function testFirestore() {
    try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            console.log(`User: ${doc.id} =>`, doc.data());
        });
        console.log("Firestore is working!");
    } catch (error) {
        console.error("Error testing Firestore:", error);
    }
}
testFirestore();

// Add a user to Firestore
async function addUser() {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: "John",
            age: 20,
            email: "JohnDoe123@gmail.com",
        });
        console.log("Document written with ID:", docRef.id);
    } catch (e) {
        console.error("Error adding document:", e);
    }
}

// Toggle between Login and Register Forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    loginForm.style.display =
        loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display =
        registerForm.style.display === "none" ? "block" : "none";
}

// Register a new user
function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Simulate storing the user data (In real app, this should go to the backend)
    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration Successful!");
        toggleForms();
    } else {
        alert("Please fill in all fields");
    }
}

// Login a user
function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    // Simulate checking user data (In real app, this should go to the backend)
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login Successful!");
        document.getElementById("login-register").style.display = "none";
        document.getElementById("post-section").style.display = "block";
    } else {
        alert("Invalid Credentials");
    }
}

// Array to store posts
let posts = [];

// Create a new post
function createPost() {
    const postContent = document.getElementById("post-content").value;

    if (postContent) {
        posts.push(postContent);
        document.getElementById("post-content").value = ""; // Clear post content field
        displayPosts();
    } else {
        alert("Please write something to post");
    }
}

// Display all posts
function displayPosts() {
    const postDisplay = document.getElementById("posts-display");
    postDisplay.innerHTML = ""; // Clear the existing posts

    posts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-item");
        postElement.innerHTML = `
            <p>${post}</p>
        `;
        postDisplay.appendChild(postElement);
    });
}

// Search posts by content
function searchPosts() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredPosts = posts.filter((post) =>
        post.toLowerCase().includes(query)
    );

    const postDisplay = document.getElementById("posts-display");
    postDisplay.innerHTML = ""; // Clear existing posts

    filteredPosts.forEach((post) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-item");
        postElement.innerHTML = `
            <p>${post}</p>
        `;
        postDisplay.appendChild(postElement);
    });
}

 