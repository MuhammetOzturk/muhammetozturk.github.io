docker run --rm -it -p 4000:4000 \
  -v "$PWD":/srv/jekyll \
  jekyll-chirpy-blog \
  bash -c "bundle install && bundle exec jekyll serve --host 0.0.0.0 --livereload"
