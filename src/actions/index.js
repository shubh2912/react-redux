const URL = 'http://localhost:8900';


export function latestNews() {
    const output = fetch(`${URL}/articles?_end=3`, {
        method: 'GET'
    }).then(response => response.json())

    return {
        type: 'GET_LATEST',
        payload: output
    }
}


export function articleNews() {
    const output = fetch(`${URL}/articles?_start=3&_end=10`, {
        method: 'GET'
    }).then(response => response.json())

    return {
        type: 'GET_ARTICLE',
        payload: output
    }
}

export function latestGallery() {
    const output = fetch(`${URL}/galleries?_limit=2`, {
        method: 'GET'
    }).then((response) => response.json())

    return {
        type: 'GET_LATEST_GALLERY',
        payload: output
    }
}

export function selectedNews(id) {
    const output = fetch(`${URL}/articles?id=${id}`, {
        method: 'GET'
    }).then(response => response.json())

    return {
        type: 'GET_SELECTED_NEWS',
        payload: output
    }
}

export function clearSelectedNews() {
    return {
        type: 'CLEAR_NEWS',
        payload: []
    }
}


export function handleLikes(array, id) {
    const output = fetch(`${URL}/articles/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ likes: array })
    })
        .then(response => response.json())

    return {
        type: 'HANDLE_LIKES',
        payload: output
    }
}

export function PostData(title, body, category) {
    var random = Math.floor(Math.random() * 1000);
    let data = {
        id: random,
        title: title,
        body: body,
        category: category,
        img: "7.jpg",
        date: "21/21/1944",
        author: "Meredith Cash",
        views: 0,
        likes: [
            0,
            0
        ]
    }
    const abc = fetch(`${URL}/articles/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
    return {
        type: 'POST_FORM',
        payload: abc
    }

}

