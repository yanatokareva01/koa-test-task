# koa-test-task

Реализовать http-server на базе фреймворка Koa2, соответствующий следующим требованиям:

1) Работает с базой данных mysql. Предполагается работа с базой на чистом SQL. В субд есть табличка books (1e5 записей, забить самостоятельно случайно, у каждой книги должны быть поля title, date, autor, description, image). Реализация смежных табличек на усмотрение кандидата, архитектурные решения оцениваются

2) Присутствуют три контроллера:
  2.1)  Добавляет записи в субд
  2.2)  Отдает. Сделать возможность сортировки|группировки по всем возможным полям, возможность порционного получения с оффсетом
  2.3)  Изменяет

замечание к 2.2 - приветствуются варианты кэширования
