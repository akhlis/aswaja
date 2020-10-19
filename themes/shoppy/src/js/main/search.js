(function () {
    const url = '/feed/index.json';
    fetch(url)
        .then(response => response.json())
        .then(posts => {
            const postFeed = posts.items
            let index = new FlexSearch({
                encode: "advanced",
                tokenize: "forward",
                suggest: true,
                cache: true,
                doc: {
                    id: "id",
                    field: ["title"]
                }
            });

            postFeed.forEach(post => {
                index.add(post, postFeed[post])
                showResults(index)

                console.log(post.title)
            });
        })
        .catch(error => {
            console.log(error);
        });

    function showResults(index) {
        const suggestions = document.getElementById("search__suggestions")
        const userinput = document.getElementById("search__input")

        userinput.addEventListener("input", function () {
            let value = this.value;
            let results = index.search({
                query: value,
                limit: 20
            });
            let entry, childs = suggestions.childNodes;
            let i = 0,
                len = results.length;

            results.map((item, index) => {
                entry = childs[index];

                const createNode = (element) => {
                    return document.createElement(element);
                }
                const append = (parent, el) => {
                    return parent.appendChild(el);
                }
                const styles = (el, cl) => {
                    return el.classList.add(cl);
                }
                let entry = createNode("div"),
                    figure = createNode('figure'),
                    img = createNode('img'),
                    header = createNode('header'),
                    a = createNode('a'),
                    h2 = createNode('h2');
                img.src = item.image;
                a.href = item.url;
                a.textContent = item.title;
                append(suggestions, entry);
                append(entry, figure);
                append(figure, img);
                append(entry, header);
                append(header, h2);
                append(h2, a);
                styles(suggestions, 'search__query--active');
                styles(entry, 'search__item');
                styles(figure, 'search__item-image');
                styles(header, 'search__item-info');
                styles(h2, 'search__item-title');
                styles(a, 'search__item-link');
                styles(a, 'title');
            })

            while (childs.length > len) {
                suggestions.removeChild(childs[i])
            }

            if (len < 1) {
                suggestions.classList.remove('search__query--active')
            }
        });
    }
}());