# Note Maker

Note Maker is a simple React application for creating, viewing, editing, and deleting notes. It uses JSON Server to simulate a backend API.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [Create](#create)
  - [Home](#home)
  - [NavBar](#navbar)
  - [NoteDetails](#notedetails)
  - [NotesList](#noteslist)
  - [useFetch](#usefetch)
- [Screenshots](#screenshots)

## Installation

1. Clone the repository:

git clone <repository_url>
cd note-maker

2. Install the dependencies:

npm install

3. Install JSON Server globally:

npm install -g json-server

4. Start JSON Server:

json-server --watch public/notes.json --port 8000

5. Start the React application:

npm start

## Usage 

1. Navigate to the home page to view all notes.
2. Click on "New Note" to create a new note.
3. Click on a note title to view and edit the note.
4. Use the "Save Note" button to save changes to a note.
5. Use the "Delete Note" button to delete a note

## Components

### Create 

This component allows users to create a new note.

### Home

This component fetches and displays a list of notes.

### Navbar  

This component displays the navigation bar.

### NoteDetails  

This component displays the details of a single note, allowing users to edit or delete it.

### NoteList 

This component displays a list of notes with links to their details.

### UseFetch 

This custom hook fetches data from a given URL.



