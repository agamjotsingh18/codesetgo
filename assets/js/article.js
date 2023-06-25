// JavaScript Code for Article Page

// Function to handle like button click
function handleLikeButtonClick(likeButton) {
  likeButton.addEventListener('click', () => {
    // Handle like button click event here
    // For example, update the like count
    const likeCount = likeButton.dataset.likes;
    const updatedLikeCount = parseInt(likeCount) + 1;
    likeButton.innerText = `Like (${updatedLikeCount})`;
    likeButton.dataset.likes = updatedLikeCount;
  });
}

// Function to handle edit button click
function handleEditButtonClick(editButton) {
  editButton.addEventListener('click', () => {
    // Handle edit button click event here
    // For example, allow users to edit the article title and content
    const articleCard = editButton.closest('.article-card');
    const titleElement = articleCard.querySelector('h2');
    const contentElement = articleCard.querySelector('p');

    const newTitle = prompt('Enter new title:', titleElement.innerText);
    const newContent = prompt('Enter new content:', contentElement.innerText);

    if (newTitle && newContent) {
      titleElement.innerText = newTitle;
      contentElement.innerText = newContent;
    }
  });
}

// Function to handle delete button click
function handleDeleteButtonClick(deleteButton) {
  deleteButton.addEventListener('click', () => {
    // Handle delete button click event here
    // For example, remove the article card from the DOM
    const articleCard = deleteButton.closest('.article-card');
    articleCard.remove();
  });
}

// Function to handle create article button click
function handleCreateArticleButtonClick() {
  const createArticleButton = document.getElementById('btn-article');
  const articleWritingSection = document.getElementById('article-writing-section');
  const saveButton = document.createElement('button');
  const cancelButton = document.createElement('button');

  createArticleButton.addEventListener('click', () => {
    articleWritingSection.style.display = 'block';
    createArticleButton.disabled = true;

    // Add save and cancel buttons dynamically
    saveButton.innerText = 'Save';
    saveButton.classList.add('btn-save');
    articleWritingSection.appendChild(saveButton);

    cancelButton.innerText = 'Cancel';
    cancelButton.classList.add('btn-cancel');
    articleWritingSection.appendChild(cancelButton);
  });

  // Save button event listener
  saveButton.addEventListener('click', () => {
    const titleInput = document.querySelector('#article-writing-section input[type="text"]');
    const contentInput = document.querySelector('#article-writing-section textarea');

    // Create a new article card
    const articleCard = document.createElement('div');
    articleCard.classList.add('article-card');

    const titleElement = document.createElement('h2');
    titleElement.innerText = titleInput.value;
    articleCard.appendChild(titleElement);

    const contentElement = document.createElement('p');
    contentElement.innerText = contentInput.value;
    articleCard.appendChild(contentElement);

    const options = document.createElement('div');
    options.classList.add('options');
    articleCard.appendChild(options);

    const likeButton = document.createElement('button');
    likeButton.classList.add('btn-like');
    likeButton.innerText = 'Like (0)';
    likeButton.dataset.likes = '0';
    options.appendChild(likeButton);

    const editButton = document.createElement('button');
    editButton.classList.add('btn-edit');
    editButton.innerText = 'Edit';
    options.appendChild(editButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('btn-cancel');
    cancelButton.innerText = 'Cancel';
    options.appendChild(cancelButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-delete');
    deleteButton.innerText = 'Delete';
    options.appendChild(deleteButton);

    // Append the new article card to the article cards section
    const articleCardsSection = document.getElementById('article-cards-section');
    articleCardsSection.appendChild(articleCard);

    // Reset the input fields
    titleInput.value = '';
    contentInput.value = '';

    // Hide the article writing section and enable the create article button
    articleWritingSection.style.display = 'none';
    createArticleButton.disabled = false;

    // Attach event listeners to the new article card
    handleLikeButtonClick(likeButton);
    handleEditButtonClick(editButton);
    handleDeleteButtonClick(deleteButton);

    // Save the article cards to local storage
    saveArticleCardsToLocalStorage();
  });

  // Cancel button event listener
  cancelButton.addEventListener('click', () => {
    // Hide the article writing section and enable the create article button
    articleWritingSection.style.display = 'none';
    createArticleButton.disabled = false;
  });
}

// Function to save the article cards to local storage
function saveArticleCardsToLocalStorage() {
  const articleCardsSection = document.getElementById('article-cards-section');
  const articleCards = articleCardsSection.querySelectorAll('.article-card');

  const articleCardsData = [];

  articleCards.forEach((articleCard) => {
    const titleElement = articleCard.querySelector('h2');
    const contentElement = articleCard.querySelector('p');
    const likes = articleCard.querySelector('.btn-like').dataset.likes;

    const articleData = {
      title: titleElement.innerText,
      content: contentElement.innerText,
      likes: likes,
    };

    articleCardsData.push(articleData);
  });

  localStorage.setItem('articleCards', JSON.stringify(articleCardsData));
}

// Function to load the article cards from local storage
function loadArticleCardsFromLocalStorage() {
  const articleCardsSection = document.getElementById('article-cards-section');
  const savedArticleCards = JSON.parse(localStorage.getItem('articleCards'));

  if (savedArticleCards) {
    savedArticleCards.forEach((articleData) => {
      const articleCard = document.createElement('div');
      articleCard.classList.add('article-card');

      const titleElement = document.createElement('h2');
      titleElement.innerText = articleData.title;
      articleCard.appendChild(titleElement);

      const contentElement = document.createElement('p');
      contentElement.innerText = articleData.content;
      articleCard.appendChild(contentElement);

      const options = document.createElement('div');
      options.classList.add('options');
      articleCard.appendChild(options);

      const likeButton = document.createElement('button');
      likeButton.classList.add('btn-like');
      likeButton.innerText = `Like (${articleData.likes})`;
      likeButton.dataset.likes = articleData.likes;
      options.appendChild(likeButton);

      const editButton = document.createElement('button');
      editButton.classList.add('btn-edit');
      editButton.innerText = 'Edit';
      options.appendChild(editButton);

      // const cancelButton = document.createElement('button');
      // cancelButton.classList.add('btn-cancel');
      // cancelButton.innerText = 'Cancel';
      // options.appendChild(cancelButton);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn-delete');
      deleteButton.innerText = 'Delete';
      options.appendChild(deleteButton);

      articleCardsSection.appendChild(articleCard);

      handleLikeButtonClick(likeButton);
      handleEditButtonClick(editButton);
      handleDeleteButtonClick(deleteButton);
    });
  }
}

// Call the function to handle create article button click
handleCreateArticleButtonClick();

// Load the article cards from local storage
loadArticleCardsFromLocalStorage();


