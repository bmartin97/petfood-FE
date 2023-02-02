const _SELECTED_CLASS_NAME = 'item-selected';
const _CONTAINER_CLASS_NAME = 'testimonals-profile-item';
const _QUOTE_ITEM_CLASS_NAME = 'testimonals-quote-item';

const profilePictures = document.querySelectorAll(
    '.testimonals-profile-item-picture'
);

profilePictures.forEach((picture) => {
    picture.addEventListener('click', () =>
        selectProfileItem(picture)
    );
});

function selectProfileItem(picture) {
    const itemContainer = picture.closest(
        '.' + _CONTAINER_CLASS_NAME
    );

    unselectProfileItems();
    unselectQuoteItems();

    const selectedId = itemContainer.dataset.profileId;
    const matchingQuote = document.querySelector(
        `.${_QUOTE_ITEM_CLASS_NAME}[data-quote-id="${selectedId}"]`
    );

    itemContainer.classList.add(_SELECTED_CLASS_NAME);
    matchingQuote.classList.add(_SELECTED_CLASS_NAME);
}

function unselectProfileItems() {
    const profileItems = document.querySelectorAll(
        '.' + _CONTAINER_CLASS_NAME
    );
    profileItems.forEach((prof) =>
        prof.classList.remove(_SELECTED_CLASS_NAME)
    );
}

function unselectQuoteItems() {
    const quoteItems = document.querySelectorAll(
        '.' + _QUOTE_ITEM_CLASS_NAME
    );
    quoteItems.forEach((quote) =>
        quote.classList.remove(_SELECTED_CLASS_NAME)
    );
}

function getProfileId() {}
