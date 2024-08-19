// 모듈화, async, await, callback
// jsonplaceholder에서 posts 정보를 전체 가져온 뒤
//  userId가 4인 게시글 정보들만 출력하기

// const postService = (() => {
//     const getPosts = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         callback(posts.filter((post) => post.userId === 4));
//     };

//     return { getPosts: getPosts };
// })();

// const printPosts = (posts) => {
//     console.log(posts);
// };

// postService.getPosts(printPosts);

// albums 데이터를 요청한 뒤, userId가 5인 정보 모두 가져오기
// 그 중 userId와 title만 출력하기

const albumService = (() => {
    const getAlbums = async (userId, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        );
        const albums = await response.json();
        return callback(userId, albums);
    };

    return { getAlbums: getAlbums };
})();

const getMyAlbums = (userId, albums) => {
    return albums.filter((album) => album.userId === userId);
};

const printMyAlbums = async () => {
    const myAlbums = await albumService.getAlbums(5, getMyAlbums);
    myAlbums.forEach((myAlbum) => {
        console.log(`${myAlbum.userId}: ${myAlbum.title}`);
    });
};

printMyAlbums();

// 밑에거가 쌤코드

// async가 함수 앞에 붙여져있으면, 리턴은 무조건 Promise객체로 감싸진다.
// const postService = (() => {
//     const findPosts = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         return callback(userId, posts);
//     };

//     return { findPosts: findPosts };
// })();

// const getMyPosts = (userId, posts) => {
//     return posts.filter((post) => post.userId === userId);
// };

// const printMyPosts = async () => {
//     const myPosts = await postService.findPosts(4, getMyPosts);
//     console.log(myPosts);
// };

// printMyPosts();
