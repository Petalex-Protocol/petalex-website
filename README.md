# Petalex Website

Hugo generated website. Uses the [extended version of hugo](https://github.com/gohugoio/hugo/releases) to compile SCSS.

### Install

Ensure you have hugo up and running as per their [installation guide](https://gohugo.io/getting-started/installing).

Run `hugo server -D`.

In the browser go to `http://localhost:1313`.

### Adding new posts

Follow the folder structure already in place in `content/posts/`. Add all images, videos, etc. to that folder.


The site automatically regenerates itself using github actions when a push or merge happens on `main`.

### Adding translations

Check the `config.toml` file that the language has been added. It not then follow the format and add a new language section.

Create translations by copying the post then renaming it to include the language code. For example, in a folder with `index.md` you would create a translation by creating a new file called `index.ru.md` where `ru` is the language code for the translation.

### Open Graph Tags

When making a new post, it's worth bearing in mind how sites like Reddit and Discord are going to embed a link. By default it will use the first image in the page, or the image that is called `featured.<ext>`. It will use the `title` and `description` info in the metadata at the top of the post, so fill these in if you don't want the first sentence being used as the description.