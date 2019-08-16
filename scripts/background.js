/**
 * Get sponsored wrapper for given element.
 *
 * @param e Sponsored label element.
 *
 * @returns {null|HTMLElement}
 */
let getSponsoredUserContentWrapper = function (e) {
    for (; e && e !== document; e = e.parentNode) {
        if (e.matches('div.userContentWrapper')) {
            return e;
        }
    }

    return null;
};

let readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        setInterval(function () {
            document.querySelectorAll('span.fsm.fwn.fcg').forEach(function(e, i) {
                let elementContent = e.textContent;
                elementContent = elementContent.replace(/[- ]/g, "");

                // If post is sponsored.
                if (elementContent === 'Sponsored') {
                    let post = getSponsoredUserContentWrapper(e);

                    // Remove sponsored post.
                    if (null !== post) {
                        post.remove();
                    }
                }
            });
        }, 100);
    }
}, 10);