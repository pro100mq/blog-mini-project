import { getPosts } from './api/getPost.js';
import { addPost } from './api/addPost.js';
import { updatePost } from './api/updatePost.js';
import { deletePost } from './api/deletePost.js';
import { renderPosts } from './js/renderPosts.js'

const postsContainer = document.getElementById('postsContainer');
const openModalBtn = document.getElementById('openModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const postForm = document.getElementById('postForm');
const cancelBtn = document.querySelector('.modal-cancel-btn');


let currentPostId = null;
let allPosts = [];

async function startApp() {
    try {
        allPosts = await getPosts();
        setupEventListeners();
    } catch (error) {
        console.log(error);
    }
}

function setupEventListeners() {
    openModalBtn.addEventListener("click", () => {
        currentPostId = null;
        modalTitle.textContent = "Створити пост";
        postForm.reset();
        modalBackdrop.style.display = "flex";
    });

    cancelBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            closeModal();
        }
    });

    postForm.addEventListener('submit', postSubmit);

    postsContainer.addEventListener("click", async (e) => {
        const postId = e.target.closest('[data-id]')?.dataset.id;
        if (!postId) return;

        if (e.target.closest('.edit-btn')) {
            await editPost(postId);
        } else if (e.target.closest('.delete-btn')) {
            await handleDeletePost(postId);
        }
    });
}

async function postSubmit(e) {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('usernameInput').value.trim(),
        title: document.getElementById('postTitleInput').value.trim(),
        content: document.getElementById('postContentInput').value.trim(),
        imageUrl: document.getElementById('photoURLInput').value.trim()
    };

    try {
        if (currentPostId) {
            await updatePost(currentPostId, formData);
        } else {
            await addPost(formData);
        }
        
        allPosts = await getPosts();
        renderPosts(allPosts, postsContainer);
        closeModal();
    } catch (error) {
        console.log(error);
    }
}

async function editPost(postId) {
    try {
        const postToEdit = allPosts.find(post => post.id == postId);
        if (!postToEdit) return;

        currentPostId = postId;
        modalTitle.textContent = 'Редагувати пост';
        
        document.getElementById('usernameInput').value = postToEdit.username;
        document.getElementById('postTitleInput').value = postToEdit.title;
        document.getElementById('postContentInput').value = postToEdit.content;
        document.getElementById('photoURLInput').value = postToEdit.imageUrl;
        
        modalBackdrop.style.display = 'flex';

    } catch (error) {
        console.log(error);
    }
}

async function handleDeletePost(postId) {
    alert('Ви хочете видалити цей пост?');
    try {
        await deletePost(postId);
        allPosts = await getPosts();
        renderPosts(allPosts, postsContainer);
    } catch (error) {
        console.log(error);
    }
}

function closeModal() {
    modalBackdrop.style.display = 'none';
}

startApp();