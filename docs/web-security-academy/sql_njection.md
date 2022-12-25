---
sidebar_position: 1
---

# SQL ineksiya (SQL injection)


Ushbu bo'limda SQL ineksiya nima ekanligini o'rganamiz, va buni ba'zi misollar bilan tariflaymiz, turlicha SQL ineksiya zaifliklarini qanday topish va ulardan foydalanishni tushuntiramiz va qanday qilib SQL ineksiyani oldini olishni ham ko'rib chiqamiz.

![alt text](https://1318585344-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FrI3bnq4ApxRcW4MU3hFQ%2Fuploads%2FnSA3OH0tANXuTasZ19rU%2Fimage.png?alt=media&token=da7d58c8-3727-487a-af7b-b414bb42ae6e)

## SQL ineksiya o'zi nima ? (SQLi)

`SQL ineksiya`- bu xakerga websaytning ma'lumotlar ba'zasiga yuboriladigan so'rovlarga o'zgartirishlar kiritish imkonini beruvchi veb-xavfsizlik zaifligi hisoblanadi. Bu asosan hackerga, to'g'ridan to'g'ri olishning imkoni bo'lmagan maxfiy ma'lumotlarni ko'rish imkonini beradi. Masalan bularga, saytda ro'yxatdan o'tgan foydalanuvchilarga tegishli bo'lgan ma'lumotlar yoki websayting o'zi kirishi mumkin bo'lgan boshqa ma'lumotlar bo'lishi mumkin. Hacker ko'pincha ushbu ma'lumotlarni o'zgartirishi yoki o'chirib tashlashi mumkin, bu esa websaytdagi ma'lumotlarga yoki sayt bajaradigan harakatlarida doimiy o'zgarishlarga olib keladi.

Ba'zi hollarda xaker SQL ineksiya hujumini rivojlantirib, asosiy server yoki boshqa infratuzilmani buzishi yoki DOS hujumini amalga oshirishi mumkin.

## SQL ineksiya hujumining tasiri qanday ?

Muvaffaqiyatli amalga oshirilgan SQL ineksiya hujumi parollar, kredit karta ma'lumotlari yoki foydalanuvchi ma'lumotlari kabi maxfiy ma'lumotlarga ruxsatsiz kirishga imkon yaratib berishi mumkin. So'nggi yillarda ko'plab o'ta maxfiy ma'lumotlar buzilishi SQL ineksiya hujumlari natijasida yuzaga keldi. Ba'zi hollarda, hacker tashkilot tizimlariga doimiy kirish uchun backdoorni qo'lga kiritishi mumkin.

## SQL ineksiyaga misollar
Har xil holatda yuzaga keladigan turlicha SQL ineksiya zaifliklari, hujumlar va usullar mavjud. Ba'zi umumiy SQL ineksiya zaifliklariga quyidagilar misol bo'la oladi:

`Retriving hidden data: `Qo'shimcha natijalarni olish uchun SQL so'rovini o'zgartirish mumkin bo'lgan  va shu orqali yashirin ma'lumotlarni olish.

`Subverting application logic: (Ilova logikasini o'zgartirish)`, bu yerda siz websayt logikasigaga xalaqit beradigan so'rovni o'zgartirishingiz mumkin.

`UNION attacks: (UNION hujumlari) `bu yerda turli xil ma'lumotlar bazasidagi jadvallardan ma'lumotlarni olishingiz mumkin.

`Examining the database: (Ma'lumotlar bazasini tekshirish)` bu orqali ma'lumotlar bazasining versiyasini va tuzilishi haqida ma'lumot olishingiz mumkin.

`Blind SQL injection` bu orqali, siz nazorat qilayotgan so'rov natijalari websaytning javoblarida qaytarilmaydi.

## Retrieving hidden data (Yashirin ma'lumotlarni olish)

Har xil turdagi mahsulotlarni xarid qilish mumkin bo'lgan elektron bozor saytini ko'rib chiqing. Foydalanuvchi "Gifts" toifasini bosganida, uning brauzeri quyidagi URLga so'rov jo'natadi.

```bash
https://sizning-subdomeningiz.web-security-academy.net/filter?category=Gifts
```

Bu ma'lumotlar bazasidan kerakli mahsulotlarning ma'lumotlarini olish uchun saytda quyidagicha SQL so'rovi bajariladi:

```sql
SELECT * FROM products WHERE category = 'Gifts' AND released = 1
```
SQL so'rovi, ma'lumotlar bazasidan quyidagi ma'lumotlarni berishini so'raydi