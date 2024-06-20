FROM composer:lts as deps
WORKDIR /app
COPY . /app
RUN composer update && composer install

FROM php:8.2-apache as final
RUN docker-php-ext-install pdo pdo_mysql
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY --from=deps app/vendor/ /var/www/html/vendor
COPY . /var/www/html
EXPOSE 8000

CMD php artisan serve --host=0.0.0.0 --port=8000 