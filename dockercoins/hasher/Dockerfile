FROM ruby:alpine

# Update apk package index and add build tools without caching old indexes
RUN apk update && apk add --no-cache build-base

# Install required gems including rackup and puma which Sinatra expects.
RUN gem install sinatra thin rackup puma

# Add your application file
ADD hasher.rb /

# Expose port 80 (this statement remains valid and is compatible)
EXPOSE 80

# Specify the command to run your application
CMD ["ruby", "hasher.rb"]