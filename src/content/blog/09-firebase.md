---
title: Building a CRUD Application with Firebase
description: Firebase Firestore in Vite + React
date: Oct 06 2024
---

Firebase is a comprehensive platform for building web and mobile applications. It provides tools for authentication, databases, analytics, and much more. One of its key features is Firestore, a NoSQL database designed for real-time synchronization and scalable cloud applications. In this blog, we’ll explore how to integrate Firestore with a **Vite + React** application and implement **CRUD operations** (Create, Read, Update, Delete).

We'll use Firebase’s Firestore for data storage, and Vite’s fast build tool to power the React app. This blog will cover setting up Firebase and implementing basic CRUD operations.

Checkout [source code](https://github.com/prajeshElEvEn/archives/tree/master/src/js/fullstack/vite-firebase)

## Setting Up Firebase in a Vite React App

Before diving into the CRUD operations, you need to set up Firebase in your Vite + React project. We’ll configure Firebase and connect to Firestore.

### Step 1: Install Firebase SDK

First, you need to install Firebase in your Vite React project. Run the following command in your terminal:

```bash
npm install firebase
```

### Step 2: Initialize Firebase

Create a `src/firebase/client.js` file to configure and initialize Firebase with your project credentials. Use the following code:

```javascript
// src/firebase/client.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration using environment variables for security
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, analytics };
```

Ensure that you’ve added your Firebase environment variables in the `.env` file.

## Implementing CRUD Operations with Firestore

Now that we’ve set up Firebase, let's dive into the CRUD operations using Firestore.

### 1. Create: Adding Documents to Firestore

To create new documents in Firestore, we’ll use the `addDoc` method. Here’s how to handle form submissions to add new documents.

```jsx
// src/components/create.jsx
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/client";

function CreateComponent() {
  const [formData, setFormData] = useState({ text: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(formData);
      // Adding new document to "texts" collection
      await addDoc(collection(db, "texts"), formData);
      setFormData({ text: "" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.text}
        onChange={(e) => setFormData({ text: e.target.value })}
        placeholder="Add text"
      />
      <button type="submit">Create</button>
    </form>
  );
}
export default CreateComponent;
```

Here, `addDoc` adds the `formData` to the "texts" collection in Firestore.

### 2. Read: Fetching Documents from Firestore

To retrieve and display documents, we’ll use the `getDocs` method. This example reads all documents from the "texts" collection.

```jsx
// src/components/read.jsx
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";

function ReadComponent() {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    async function getTexts() {
      const res = await getDocs(collection(db, "texts"));
      const data = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTexts(data);
    }

    getTexts();
  }, []);

  return (
    <div>
      <h3>Texts from Firestore:</h3>
      {texts.map((text) => (
        <div key={text.id}>
          <p>{text.text}</p>
        </div>
      ))}
    </div>
  );
}
export default ReadComponent;
```

This code fetches the documents from Firestore and maps them into a usable format with IDs.

### 3. Update: Modifying Documents in Firestore

To update documents, we’ll use the `updateDoc` method. Here's how to modify an existing document in Firestore.

```jsx
// src/components/update.jsx
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/client";

function UpdateComponent() {
  const [formData, setFormData] = useState({ id: "", text: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(formData);
      // Updating the document by its ID
      await updateDoc(doc(db, "texts", formData.id), {
        text: formData.text,
      });
      setFormData({ id: "", text: "" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.id}
        onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        placeholder="Document ID"
      />
      <input
        type="text"
        value={formData.text}
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        placeholder="New text"
      />
      <button type="submit">Update</button>
    </form>
  );
}
export default UpdateComponent;
```

In this component, we retrieve a document by its ID and update the `text` field.

### 4. Delete: Removing Documents from Firestore

To delete documents from Firestore, we’ll use the `deleteDoc` method. Here’s how to delete a document using its ID.

```jsx
// src/components/delete.jsx
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/client";

function DeleteComponent() {
  const [formData, setFormData] = useState({ id: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(formData);
      // Deleting document by its ID
      await deleteDoc(doc(db, "texts", formData.id));
      setFormData({ id: "" });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.id}
        onChange={(e) => setFormData({ id: e.target.value })}
        placeholder="Document ID"
      />
      <button type="submit">Delete</button>
    </form>
  );
}
export default DeleteComponent;
```

This example removes the document with the matching `id` from the Firestore collection.

### Conclusion

With Firebase Firestore and React, you can easily implement full **CRUD** functionality. We explored how to:

- Create new documents using `addDoc`
- Read data from Firestore using `getDocs`
- Update documents using `updateDoc`
- Delete documents with `deleteDoc`

Using Firebase with Vite enables a fast development experience while providing a scalable and efficient database solution. By structuring your code with separate components for each operation, you can maintain a clean and modular codebase that’s easy to extend as your app grows.

