import { Injectable } from '@angular/core';
import { Product } from '../shared/types/product';

/**
 * Product Service
 * @date 8/28/2023 - 4:51:48 PM
 *
 * @export
 * @class ProductService
 * @typedef {ProductService}
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  // Available products
  products: Product[] = [
    {
      "id": "6e2c1da7-eb59-4a59-8ff7-629166dd6f87",
      "category": "Clothing",
      "name": "Baby Gizmo",
      "price": "73",
      "sale_price": "43.99",
      "subcategory": "Baby"
    },
    {
      "id": "282c03c2-2093-4c01-b334-11911bcb9353",
      "category": "Pets",
      "name": "Cat Tool",
      "price": "107",
      "sale_price": "96",
      "subcategory": "Cat"
    },
    {
      "id": "bac289a4-d5ca-4394-b98b-9fbe4f2fefd8",
      "category": "Activity",
      "name": "Fitness Gear",
      "price": "43.95",
      "sale_price": "25.99",
      "subcategory": "Fitness"
    },
    {
      "id": "b4dd2a97-e49c-4a16-a58d-de36b85f54df",
      "category": "Health",
      "name": "Nutrition Paraphernalia",
      "price": "164",
      "sale_price": "98.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "416c1fc7-2cb7-4277-9657-48fb3236f16d",
      "category": "Clothing",
      "name": "Mens Equipment",
      "price": "115.99",
      "sale_price": "69.99",
      "subcategory": "Mens"
    },
    {
      "id": "dd4ebf6e-a71a-4810-a3ee-1ea9256de5f1",
      "category": "Activity",
      "name": "Outdoors Tool",
      "price": "185",
      "sale_price": "129",
      "subcategory": "Outdoors"
    },
    {
      "id": "74d2ef46-197c-4abc-88a5-d1b895ed7258",
      "category": "Clothing",
      "name": "Womens Gear",
      "price": "193.95",
      "sale_price": "135.99",
      "subcategory": "Womens"
    },
    {
      "id": "f7a92464-dfa7-4fad-8391-18d7977d9f14",
      "category": "Entertainment",
      "name": "Game Widget",
      "price": "141.99",
      "sale_price": "126.95",
      "subcategory": "Game"
    },
    {
      "id": "ba12a306-b8d9-4e4f-832d-67cb1576c705",
      "category": "Beauty",
      "name": "Makeup Apparatus",
      "price": "63.99",
      "sale_price": "56",
      "subcategory": "Makeup"
    },
    {
      "id": "15f0b1ba-bf19-435f-8d93-ff771df647b4",
      "category": "Home",
      "name": "Kitchen Item",
      "price": "152.95",
      "sale_price": "106.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "dadc1adc-79c2-4374-9ff4-a454dcbdb7fa",
      "category": "Electronics",
      "name": "Phone Doodad",
      "price": "36",
      "sale_price": "25",
      "subcategory": "Phone"
    },
    {
      "id": "57e15f4f-51c1-4022-b6e8-1b03cac289af",
      "category": "Clothing",
      "name": "Womens Accessory",
      "price": "154.99",
      "sale_price": "92.95",
      "subcategory": "Womens"
    },
    {
      "id": "3c56dbab-af45-431f-a71d-e676c1042c42",
      "category": "Activity",
      "name": "Sports Accessory",
      "price": "33.99",
      "sale_price": "23",
      "subcategory": "Sports"
    },
    {
      "id": "80c7b99c-1e03-4279-a78c-81089d53fbd2",
      "category": "Activity",
      "name": "Fitness Implement",
      "price": "152.99",
      "sale_price": "91.99",
      "subcategory": "Fitness"
    },
    {
      "id": "7beb2d75-00ee-4d78-ad3d-6632533e42ed",
      "category": "Automotive",
      "name": "Truck Gadget",
      "price": "190.99",
      "sale_price": "152",
      "subcategory": "Truck"
    },
    {
      "id": "22e51f9e-ae33-4054-b7ae-da179b635bdb",
      "category": "Home",
      "name": "Home Improvement Contraption",
      "price": "101",
      "sale_price": "70.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "8799a7df-f610-4b00-be09-5516ba63f578",
      "category": "Activity",
      "name": "Sports Item",
      "price": "81",
      "sale_price": "48.95",
      "subcategory": "Sports"
    },
    {
      "id": "06832c2b-f8c6-4b66-98ac-5e8286c1a9c9",
      "category": "Activity",
      "name": "Beach Equipment",
      "price": "169",
      "sale_price": "101.99",
      "subcategory": "Beach"
    },
    {
      "id": "a3b7af94-260c-4f36-9ed2-1824d5bde834",
      "category": "Electronics",
      "name": "Camera Mechanism",
      "price": "176.95",
      "sale_price": "158",
      "subcategory": "Camera"
    },
    {
      "id": "f329b499-396e-4d78-9c07-ba9210bc768e",
      "category": "Activity",
      "name": "Camping Doodad",
      "price": "140.95",
      "sale_price": "84.95",
      "subcategory": "Camping"
    },
    {
      "id": "981eed5c-3474-43da-a968-7fb15cd723d1",
      "category": "Home",
      "name": "Kitchen Doodad",
      "price": "194.95",
      "sale_price": "155.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "ce20c337-4e13-41b6-8322-1c288c3d34e1",
      "category": "Clothing",
      "name": "Jewelry Component",
      "price": "74.99",
      "sale_price": "44.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "54ccd62c-4dcc-400f-965c-00a5f19a5ce7",
      "category": "Home",
      "name": "Cooking Instrument",
      "price": "90.95",
      "sale_price": "62.99",
      "subcategory": "Cooking"
    },
    {
      "id": "7f8b8e87-eb26-4e93-94fc-625cff1a2107",
      "category": "Pets",
      "name": "Aquarium Equipment",
      "price": "54.99",
      "sale_price": "32.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "f62b739f-60ad-47f0-9c10-ae51237775a1",
      "category": "Clothing",
      "name": "Kids Contraption",
      "price": "121.95",
      "sale_price": "84",
      "subcategory": "Kids"
    },
    {
      "id": "3f6cf40b-fd22-4f46-bce6-d33f9c905c6e",
      "category": "Entertainment",
      "name": "Game Mechanism",
      "price": "67",
      "sale_price": "40.99",
      "subcategory": "Game"
    },
    {
      "id": "674916f3-169c-454c-a417-93b6d3a9a46a",
      "category": "Activity",
      "name": "Biking Whatchamacallit",
      "price": "12",
      "sale_price": "10",
      "subcategory": "Biking"
    },
    {
      "id": "76a0c2dd-879b-4111-b30a-a2eed6ae7f88",
      "category": "Activity",
      "name": "Swimming Gear",
      "price": "174.95",
      "sale_price": "121",
      "subcategory": "Swimming"
    },
    {
      "id": "df0afd03-a8fe-49bc-9d1b-12436f036b00",
      "category": "Activity",
      "name": "Beach Accessory",
      "price": "157",
      "sale_price": "94",
      "subcategory": "Beach"
    },
    {
      "id": "f73cc712-4371-462e-98bb-128eb55869e6",
      "category": "Activity",
      "name": "Camping Gadget",
      "price": "52.99",
      "sale_price": "36",
      "subcategory": "Camping"
    },
    {
      "id": "6aa24230-c3b6-4a23-b9c2-2b542fcd1ce8",
      "category": "Home",
      "name": "Bedding Gizmo",
      "price": "118.95",
      "sale_price": "106.95",
      "subcategory": "Bedding"
    },
    {
      "id": "c000e9f6-4e53-40a8-9423-82bd45b867b4",
      "category": "Electronics",
      "name": "Computer Item",
      "price": "66.95",
      "sale_price": "59.95",
      "subcategory": "Computer"
    },
    {
      "id": "52e5e51c-0159-4fa6-a5ec-80b467df4703",
      "category": "Electronics",
      "name": "Phone Gear",
      "price": "37.95",
      "sale_price": "25",
      "subcategory": "Phone"
    },
    {
      "id": "167f13be-5047-4ed6-ab7a-98ff435ff420",
      "category": "Entertainment",
      "name": "Toy Implement",
      "price": "167.99",
      "sale_price": "100.99",
      "subcategory": "Toy"
    },
    {
      "id": "17bc0ef5-f08f-44e7-818d-fdf8a648bf6b",
      "category": "Health",
      "name": "Medicine Whatchamacallit",
      "price": "63",
      "sale_price": "50.95",
      "subcategory": "Medicine"
    },
    {
      "id": "fb658747-6943-483c-bb66-d39faf0f678d",
      "category": "Automotive",
      "name": "Car Gadget",
      "price": "115.99",
      "sale_price": "92",
      "subcategory": "Car"
    },
    {
      "id": "64da760c-0913-47bb-a94a-909ae1484fc4",
      "category": "Activity",
      "name": "Sports Attachment",
      "price": "183.95",
      "sale_price": "128",
      "subcategory": "Sports"
    },
    {
      "id": "b5826b23-ae19-4765-a4c7-84d2288d667e",
      "category": "Electronics",
      "name": "Computer Kit",
      "price": "69",
      "sale_price": "62",
      "subcategory": "Computer"
    },
    {
      "id": "d63771a1-231c-49a8-bd89-319e4ec4d01a",
      "category": "Entertainment",
      "name": "Music Doodad",
      "price": "31.95",
      "sale_price": "21.99",
      "subcategory": "Music"
    },
    {
      "id": "b2f417fd-9f00-4a44-ab8c-c3b11832d0bf",
      "category": "Health",
      "name": "First Aid Equipment",
      "price": "116.95",
      "sale_price": "81.99",
      "subcategory": "First Aid"
    },
    {
      "id": "2b436b27-e7bd-4a1f-b86d-5d3d5d5064fb",
      "category": "Electronics",
      "name": "Technology Widget",
      "price": "66.99",
      "sale_price": "52",
      "subcategory": "Technology"
    },
    {
      "id": "5f0b6e0a-4e33-4170-96e5-0a8f8e6c557c",
      "category": "Home",
      "name": "Gardening Whatchamacallit",
      "price": "57.95",
      "sale_price": "51.95",
      "subcategory": "Gardening"
    },
    {
      "id": "0f833699-2c68-4fbf-a56e-b27cb0998947",
      "category": "Home",
      "name": "Storage Machine",
      "price": "58",
      "sale_price": "34",
      "subcategory": "Storage"
    },
    {
      "id": "955b6059-01da-4809-956a-0af491111968",
      "category": "Entertainment",
      "name": "Game Rig",
      "price": "102",
      "sale_price": "61",
      "subcategory": "Game"
    },
    {
      "id": "6c132008-9530-4b23-8764-dd7fce56e5e6",
      "category": "Entertainment",
      "name": "Party Apparatus",
      "price": "150.99",
      "sale_price": "105.99",
      "subcategory": "Party"
    },
    {
      "id": "ef132a44-97bf-4ff1-b287-f57521129c53",
      "category": "Pets",
      "name": "Dog Component",
      "price": "72",
      "sale_price": "64.99",
      "subcategory": "Dog"
    },
    {
      "id": "9d906c1c-a54b-4f2b-a026-0322e32490af",
      "category": "Health",
      "name": "First Aid Apparatus",
      "price": "156",
      "sale_price": "109",
      "subcategory": "First Aid"
    },
    {
      "id": "7f9b0cfa-0ff6-4513-80fd-2ee3dc0ebd35",
      "category": "Home",
      "name": "Kitchen Attachment",
      "price": "60.95",
      "sale_price": "36.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "79fede39-435b-493f-b66f-00156a43c27c",
      "category": "Beauty",
      "name": "Makeup Device",
      "price": "133.99",
      "sale_price": "93",
      "subcategory": "Makeup"
    },
    {
      "id": "784c4022-de6d-4ad6-8e14-5f3607aa116f",
      "category": "Clothing",
      "name": "Kids Tool",
      "price": "195.99",
      "sale_price": "117",
      "subcategory": "Kids"
    },
    {
      "id": "93cc0ffd-2e09-4209-a9e3-f861fb26fb91",
      "category": "Health",
      "name": "Vitamin Implement",
      "price": "117.95",
      "sale_price": "105.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "cce92147-86d6-41c1-9e85-d9403077ba60",
      "category": "Activity",
      "name": "Beach Doodad",
      "price": "175.95",
      "sale_price": "140.99",
      "subcategory": "Beach"
    },
    {
      "id": "0bb0b64f-8cad-420d-8e38-43e6f3d2dde9",
      "category": "Home",
      "name": "Furniture Gizmo",
      "price": "30",
      "sale_price": "21",
      "subcategory": "Furniture"
    },
    {
      "id": "aafa49b7-8340-43f9-a845-8baec44b76d3",
      "category": "Clothing",
      "name": "Mens Thingamajig",
      "price": "130.95",
      "sale_price": "91.95",
      "subcategory": "Mens"
    },
    {
      "id": "97a8aa92-4ff4-4aa0-9e28-41e529b8e4e5",
      "category": "Clothing",
      "name": "Kids Supplies",
      "price": "25",
      "sale_price": "20",
      "subcategory": "Kids"
    },
    {
      "id": "011743a1-0331-4742-9ece-30bbcc63f6cf",
      "category": "Beauty",
      "name": "Hair Care Equipment",
      "price": "34.95",
      "sale_price": "27.99",
      "subcategory": "Hair Care"
    },
    {
      "id": "89c256a6-4f8b-4a78-9598-452be3672bb5",
      "category": "Pets",
      "name": "Aquarium Apparatus",
      "price": "139.99",
      "sale_price": "125",
      "subcategory": "Aquarium"
    },
    {
      "id": "8c68becb-ad59-4285-8345-6fe4740f8f92",
      "category": "Activity",
      "name": "Fitness Device",
      "price": "57",
      "sale_price": "51.95",
      "subcategory": "Fitness"
    },
    {
      "id": "2f320da6-d974-4af6-9bb8-ad00638dfdc3",
      "category": "Automotive",
      "name": "Engine Attachment",
      "price": "132",
      "sale_price": "92.99",
      "subcategory": "Engine"
    },
    {
      "id": "581f1171-1ca5-4ea9-8a5b-300d71bd2507",
      "category": "Clothing",
      "name": "Womens Machine",
      "price": "64.99",
      "sale_price": "38.99",
      "subcategory": "Womens"
    },
    {
      "id": "8dcc4026-fa6f-4555-9b50-1a832bf2c8fb",
      "category": "Home",
      "name": "Furniture Paraphernalia",
      "price": "149.99",
      "sale_price": "89",
      "subcategory": "Furniture"
    },
    {
      "id": "f9c8757d-226b-4714-891d-a257d4b686ee",
      "category": "Activity",
      "name": "Sports Machine",
      "price": "33.95",
      "sale_price": "26.99",
      "subcategory": "Sports"
    },
    {
      "id": "f8353458-6258-481b-aaa1-26f809ceb9e5",
      "category": "Clothing",
      "name": "Baby Doodad",
      "price": "173.95",
      "sale_price": "155.95",
      "subcategory": "Baby"
    },
    {
      "id": "d0f016e9-a99f-4ae1-99f1-9cde8331f1ef",
      "category": "Home",
      "name": "Home Improvement Paraphernalia",
      "price": "147.95",
      "sale_price": "117.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "328fad76-431a-46b6-9ac9-d23dd125e67e",
      "category": "Entertainment",
      "name": "Party Gear",
      "price": "114.99",
      "sale_price": "79",
      "subcategory": "Party"
    },
    {
      "id": "d2817c65-81bf-45ea-8891-41a7d4b84b4d",
      "category": "Entertainment",
      "name": "Music Whatchamacallit",
      "price": "121.95",
      "sale_price": "84.95",
      "subcategory": "Music"
    },
    {
      "id": "5ece9206-814a-4f14-b579-5cc7cacc826c",
      "category": "Activity",
      "name": "Biking Gizmo",
      "price": "18",
      "sale_price": "16.99",
      "subcategory": "Biking"
    },
    {
      "id": "e6ce8dcf-525c-4a64-95b0-5082b5bfff24",
      "category": "Health",
      "name": "Vitamin Machine",
      "price": "110.95",
      "sale_price": "99.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "3f700d1f-0b60-4286-9405-84fb76f33f2d",
      "category": "Automotive",
      "name": "Truck Whatchamacallit",
      "price": "198",
      "sale_price": "138.99",
      "subcategory": "Truck"
    },
    {
      "id": "97fca354-4979-44b6-9c89-c0b93566cc02",
      "category": "Home",
      "name": "Kitchen Item",
      "price": "58",
      "sale_price": "52.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "ed86f9a9-9fc1-46d4-98e1-91f17b36fcfc",
      "category": "Home",
      "name": "Home Improvement Gadget",
      "price": "160.99",
      "sale_price": "112",
      "subcategory": "Home Improvement"
    },
    {
      "id": "1f3ffbdc-ecab-480f-b3ef-f2adbda4ce66",
      "category": "Entertainment",
      "name": "Toy Doodad",
      "price": "172.99",
      "sale_price": "137.99",
      "subcategory": "Toy"
    },
    {
      "id": "98cfae96-4a04-4b18-99a0-2360a1b4ff03",
      "category": "Home",
      "name": "Kitchen Item",
      "price": "71.95",
      "sale_price": "63.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "84e3676f-7bb7-4a1c-9db2-ef2721327542",
      "category": "Home",
      "name": "Furniture Contraption",
      "price": "195",
      "sale_price": "175.99",
      "subcategory": "Furniture"
    },
    {
      "id": "bd63f467-9da2-4bd5-831d-7f4715942e9b",
      "category": "Home",
      "name": "Kitchen Paraphernalia",
      "price": "83.95",
      "sale_price": "74.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "12dfe963-69a4-48cc-ba15-c0f7cdcdc7ad",
      "category": "Clothing",
      "name": "Jewelry Mechanism",
      "price": "66.95",
      "sale_price": "52.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "bf4c4e07-eb84-434d-94e5-7938c8e5cec3",
      "category": "Electronics",
      "name": "Computer Accessory",
      "price": "100.99",
      "sale_price": "70",
      "subcategory": "Computer"
    },
    {
      "id": "44b979b1-8cc1-4eb3-8206-6f623f41c37e",
      "category": "Activity",
      "name": "Sports Gizmo",
      "price": "54",
      "sale_price": "48.99",
      "subcategory": "Sports"
    },
    {
      "id": "ddf98787-f028-46bb-a41b-7ea96dce0dcc",
      "category": "Entertainment",
      "name": "Toy Instrument",
      "price": "13",
      "sale_price": "10",
      "subcategory": "Toy"
    },
    {
      "id": "4670ebee-effe-4be3-92db-6e5eb86a35cd",
      "category": "Automotive",
      "name": "Engine Device",
      "price": "63",
      "sale_price": "44.99",
      "subcategory": "Engine"
    },
    {
      "id": "a42dd66e-23f4-477c-a1d6-abe6b6ae01c4",
      "category": "Automotive",
      "name": "Tire Doodad",
      "price": "45.99",
      "sale_price": "40.99",
      "subcategory": "Tire"
    },
    {
      "id": "3251c4de-7dd1-4cdf-8ef1-cb754d6b112f",
      "category": "Home",
      "name": "Cooking Apparatus",
      "price": "59.99",
      "sale_price": "47.95",
      "subcategory": "Cooking"
    },
    {
      "id": "64cdb1a5-86ac-4104-8e45-36f146a9e5fb",
      "category": "Home",
      "name": "Storage Component",
      "price": "184.99",
      "sale_price": "128.99",
      "subcategory": "Storage"
    },
    {
      "id": "d935b64c-240e-4360-9782-9e5a73a61277",
      "category": "Home",
      "name": "Storage Apparatus",
      "price": "105.95",
      "sale_price": "73.99",
      "subcategory": "Storage"
    },
    {
      "id": "44a9bb50-1b3b-4d48-b382-7beeeebe8f43",
      "category": "Activity",
      "name": "Biking Paraphernalia",
      "price": "172.99",
      "sale_price": "120.95",
      "subcategory": "Biking"
    },
    {
      "id": "1f19e183-2dc8-48f9-a4f1-2f7abac6062f",
      "category": "Pets",
      "name": "Cat Implement",
      "price": "83.95",
      "sale_price": "74.95",
      "subcategory": "Cat"
    },
    {
      "id": "6fb17080-8503-4209-81cb-2873e63c846d",
      "category": "Home",
      "name": "Furniture Rig",
      "price": "85.99",
      "sale_price": "51",
      "subcategory": "Furniture"
    },
    {
      "id": "dff31d6e-81f8-4f2f-829d-dfd2c38c5adb",
      "category": "Health",
      "name": "First Aid Doodad",
      "price": "137.99",
      "sale_price": "123.99",
      "subcategory": "First Aid"
    },
    {
      "id": "ccef7762-67d6-4172-a805-6cd9ce423a1e",
      "category": "Clothing",
      "name": "Jewelry Whatchamacallit",
      "price": "15.95",
      "sale_price": "9.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "4a39de4f-54d1-4518-9e35-bb838115af79",
      "category": "Health",
      "name": "First Aid Tool",
      "price": "21.95",
      "sale_price": "16.99",
      "subcategory": "First Aid"
    },
    {
      "id": "edafbbdb-2fb9-4cb0-a26d-5505b03afba5",
      "category": "Pets",
      "name": "Dog Component",
      "price": "156.95",
      "sale_price": "124.95",
      "subcategory": "Dog"
    },
    {
      "id": "a7188266-9fcd-43e9-bff2-1b8c7e19ac7f",
      "category": "Activity",
      "name": "Biking Contraption",
      "price": "158",
      "sale_price": "94",
      "subcategory": "Biking"
    },
    {
      "id": "f2cc9edb-ca88-4c6d-b1ed-264b40a0d83a",
      "category": "Home",
      "name": "Bedding Contraption",
      "price": "30",
      "sale_price": "18.95",
      "subcategory": "Bedding"
    },
    {
      "id": "53d6f87c-3e6e-43d4-bcd3-0625a1a7cf3c",
      "category": "Health",
      "name": "First Aid Doodad",
      "price": "137.99",
      "sale_price": "95.95",
      "subcategory": "First Aid"
    },
    {
      "id": "38e56014-3ada-4eee-a003-d9d387890a3b",
      "category": "Electronics",
      "name": "Computer Gizmo",
      "price": "23.95",
      "sale_price": "18",
      "subcategory": "Computer"
    },
    {
      "id": "63bdf692-0b74-49f0-9b6d-26fdf5171221",
      "category": "Clothing",
      "name": "Jewelry Component",
      "price": "26.99",
      "sale_price": "23",
      "subcategory": "Jewelry"
    },
    {
      "id": "36b077dc-f76b-4a6f-ad0c-944107a03f84",
      "category": "Home",
      "name": "Bedding Whatchamacallit",
      "price": "199",
      "sale_price": "179.99",
      "subcategory": "Bedding"
    },
    {
      "id": "6b0ef75b-6b6a-4fa4-9182-0616a4d66f6a",
      "category": "Pets",
      "name": "Aquarium Apparatus",
      "price": "177.99",
      "sale_price": "106.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "f1d165b3-65c3-47e7-af59-1e69da3de4a8",
      "category": "Home",
      "name": "Furniture Device",
      "price": "141.99",
      "sale_price": "126.99",
      "subcategory": "Furniture"
    },
    {
      "id": "348afbdf-8b43-41e1-bd32-8bb956449edb",
      "category": "Home",
      "name": "Home Improvement Equipment",
      "price": "72.95",
      "sale_price": "43.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "29489723-a395-4ff5-96b9-5ed6b3089d9b",
      "category": "Entertainment",
      "name": "Book Widget",
      "price": "31",
      "sale_price": "18",
      "subcategory": "Book"
    },
    {
      "id": "22b6441a-b58d-4983-832d-ee7d577db6a9",
      "category": "Activity",
      "name": "Camping Attachment",
      "price": "54",
      "sale_price": "37",
      "subcategory": "Camping"
    },
    {
      "id": "cbeb487e-dc5c-4ee2-babe-ff6c01dbc46e",
      "category": "Home",
      "name": "Cleaning Doodad",
      "price": "17.99",
      "sale_price": "13.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "fd828224-dd13-4522-ba64-46442c1d9e75",
      "category": "Automotive",
      "name": "Car Contraption",
      "price": "123.99",
      "sale_price": "73.95",
      "subcategory": "Car"
    },
    {
      "id": "d976f9d9-26f6-4e74-a6ee-fa02510a0b50",
      "category": "Health",
      "name": "Nutrition Accessory",
      "price": "166.95",
      "sale_price": "149.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "bc45dffa-ed7f-455c-82bd-e332eb0603f7",
      "category": "Pets",
      "name": "Dog Component",
      "price": "57",
      "sale_price": "34.99",
      "subcategory": "Dog"
    },
    {
      "id": "1aaec995-2ed0-4916-91fb-45b8872d90d6",
      "category": "Clothing",
      "name": "Baby Paraphernalia",
      "price": "78",
      "sale_price": "46.99",
      "subcategory": "Baby"
    },
    {
      "id": "ed2dc123-1ec2-48d7-b269-a170610121dd",
      "category": "Home",
      "name": "Furniture Instrument",
      "price": "168.99",
      "sale_price": "100",
      "subcategory": "Furniture"
    },
    {
      "id": "5b070a91-4475-4b22-bacb-0660d81cf66a",
      "category": "Entertainment",
      "name": "Book Apparatus",
      "price": "127.99",
      "sale_price": "76",
      "subcategory": "Book"
    },
    {
      "id": "5a6f5225-56ea-4f00-87b9-b554390f56c1",
      "category": "Entertainment",
      "name": "Game Whatchamacallit",
      "price": "66.99",
      "sale_price": "52",
      "subcategory": "Game"
    },
    {
      "id": "8e2cb191-39a4-457a-97e4-499942ebb389",
      "category": "Entertainment",
      "name": "Movie Kit",
      "price": "178.99",
      "sale_price": "142.99",
      "subcategory": "Movie"
    },
    {
      "id": "292dfc88-92c8-4fbf-80b6-394a0d6a78ca",
      "category": "Automotive",
      "name": "Car Mechanism",
      "price": "72.95",
      "sale_price": "64.95",
      "subcategory": "Car"
    },
    {
      "id": "6a82e202-6658-4860-9e00-f52aa567dee1",
      "category": "Automotive",
      "name": "Car Whatchamacallit",
      "price": "198.99",
      "sale_price": "158.99",
      "subcategory": "Car"
    },
    {
      "id": "9be8968f-a8ba-4a4b-b9e7-5fe2c0bb672f",
      "category": "Automotive",
      "name": "Engine Mechanism",
      "price": "172.95",
      "sale_price": "103",
      "subcategory": "Engine"
    },
    {
      "id": "8e2f66e3-53e5-40f3-b5a8-1e52b0468762",
      "category": "Health",
      "name": "Medicine Contraption",
      "price": "186",
      "sale_price": "130",
      "subcategory": "Medicine"
    },
    {
      "id": "ff1f0f92-d61c-41a4-90f9-a7f58414802d",
      "category": "Home",
      "name": "Bedding Paraphernalia",
      "price": "113.99",
      "sale_price": "90",
      "subcategory": "Bedding"
    },
    {
      "id": "d08a61eb-0a26-46ee-921e-3d0772572f52",
      "category": "Clothing",
      "name": "Baby Implement",
      "price": "122",
      "sale_price": "73.99",
      "subcategory": "Baby"
    },
    {
      "id": "6eee2110-6c92-4b99-8b6f-a741a19915f3",
      "category": "Clothing",
      "name": "Womens Rig",
      "price": "17.99",
      "sale_price": "10",
      "subcategory": "Womens"
    },
    {
      "id": "4d0b09f6-22d7-4624-ab67-8141692223e6",
      "category": "Entertainment",
      "name": "Toy Device",
      "price": "121.95",
      "sale_price": "108",
      "subcategory": "Toy"
    },
    {
      "id": "1e571b16-7243-4554-b235-ce6f629d6600",
      "category": "Home",
      "name": "Storage Machine",
      "price": "85",
      "sale_price": "51",
      "subcategory": "Storage"
    },
    {
      "id": "06155e71-c418-4909-b797-27ed1369263d",
      "category": "Activity",
      "name": "Fitness Thingamajig",
      "price": "60",
      "sale_price": "36.99",
      "subcategory": "Fitness"
    },
    {
      "id": "1538c672-41c3-4979-bf01-801d52a55da9",
      "category": "Beauty",
      "name": "Personal Instrument",
      "price": "70",
      "sale_price": "56.99",
      "subcategory": "Personal"
    },
    {
      "id": "123a02e4-99fb-4a48-a341-5ae3475063d1",
      "category": "Automotive",
      "name": "Truck Device",
      "price": "110.95",
      "sale_price": "66.95",
      "subcategory": "Truck"
    },
    {
      "id": "e27218b2-0a20-41a7-bc90-732d74a56849",
      "category": "Electronics",
      "name": "Technology Doodad",
      "price": "105",
      "sale_price": "63.95",
      "subcategory": "Technology"
    },
    {
      "id": "9ba51040-453b-42fd-95f9-88354ebae8ca",
      "category": "Activity",
      "name": "Sports Whatchamacallit",
      "price": "23.95",
      "sale_price": "13.95",
      "subcategory": "Sports"
    },
    {
      "id": "fb223b8a-c244-4d3a-8967-8396fa2254ea",
      "category": "Activity",
      "name": "Outdoors Whatchamacallit",
      "price": "170.95",
      "sale_price": "153.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "15fad931-c785-4ccd-bef2-3bca9e50af18",
      "category": "Clothing",
      "name": "Baby Item",
      "price": "122",
      "sale_price": "97.95",
      "subcategory": "Baby"
    },
    {
      "id": "b984c985-c7cd-4a2b-8396-4a3899ebd9d3",
      "category": "Beauty",
      "name": "Hair Care Contraption",
      "price": "194",
      "sale_price": "155",
      "subcategory": "Hair Care"
    },
    {
      "id": "c3a78192-7ad0-4d1c-9cf7-b76ed7e0045d",
      "category": "Clothing",
      "name": "Mens Machine",
      "price": "137.95",
      "sale_price": "123.99",
      "subcategory": "Mens"
    },
    {
      "id": "8fc18d00-351f-4ce9-a55a-a97b73e4261f",
      "category": "Entertainment",
      "name": "Toy Device",
      "price": "77",
      "sale_price": "69",
      "subcategory": "Toy"
    },
    {
      "id": "35778a04-cc78-47c4-9565-75eddf85778d",
      "category": "Electronics",
      "name": "Computer Component",
      "price": "21.99",
      "sale_price": "18.99",
      "subcategory": "Computer"
    },
    {
      "id": "8f1e4044-f658-470a-844d-f10ded17cd13",
      "category": "Entertainment",
      "name": "Music Tool",
      "price": "187.99",
      "sale_price": "130.95",
      "subcategory": "Music"
    },
    {
      "id": "7132d159-1604-49b7-8e74-eb6c1db07872",
      "category": "Beauty",
      "name": "Bath Gear",
      "price": "120.99",
      "sale_price": "108.99",
      "subcategory": "Bath"
    },
    {
      "id": "50d053ff-5411-4df3-a5e1-34d60b12d9b8",
      "category": "Home",
      "name": "Home Improvement Paraphernalia",
      "price": "95",
      "sale_price": "57.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "99b65323-7199-418e-b2fe-f45a7e3c511c",
      "category": "Activity",
      "name": "Outdoors Apparatus",
      "price": "188.95",
      "sale_price": "169.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "ac4890f2-f7f0-4403-803c-c8d92e626b71",
      "category": "Clothing",
      "name": "Jewelry Whatchamacallit",
      "price": "40",
      "sale_price": "24.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "1f61aa8d-375f-449f-9d77-54362385249b",
      "category": "Activity",
      "name": "Fitness Accessory",
      "price": "28",
      "sale_price": "25.99",
      "subcategory": "Fitness"
    },
    {
      "id": "d9b07804-9961-448b-99b7-90f3577e8981",
      "category": "Beauty",
      "name": "Makeup Device",
      "price": "198.95",
      "sale_price": "158",
      "subcategory": "Makeup"
    },
    {
      "id": "96205937-f71e-4fc1-a7e3-ef266240da57",
      "category": "Clothing",
      "name": "Mens Component",
      "price": "52.95",
      "sale_price": "41.99",
      "subcategory": "Mens"
    },
    {
      "id": "91338b25-400e-4c26-9600-ad75552e86b1",
      "category": "Automotive",
      "name": "Car Kit",
      "price": "168.99",
      "sale_price": "151",
      "subcategory": "Car"
    },
    {
      "id": "5a8402cf-969b-4be2-a4e6-6e013bdf692d",
      "category": "Automotive",
      "name": "Car Machine",
      "price": "191",
      "sale_price": "152",
      "subcategory": "Car"
    },
    {
      "id": "431875f1-c69e-4959-98b7-6c812ffaa20d",
      "category": "Activity",
      "name": "Fitness Paraphernalia",
      "price": "69",
      "sale_price": "62.95",
      "subcategory": "Fitness"
    },
    {
      "id": "f67faf25-e57c-474e-9607-20e36653c72d",
      "category": "Clothing",
      "name": "Womens Gizmo",
      "price": "88",
      "sale_price": "52.95",
      "subcategory": "Womens"
    },
    {
      "id": "283fffad-f04e-47c2-9ee1-cf03da0e70cd",
      "category": "Activity",
      "name": "Swimming Widget",
      "price": "140",
      "sale_price": "126",
      "subcategory": "Swimming"
    },
    {
      "id": "05846013-8f7b-41db-b44c-a167986f8f36",
      "category": "Clothing",
      "name": "Womens Contraption",
      "price": "180.95",
      "sale_price": "125",
      "subcategory": "Womens"
    },
    {
      "id": "57c2900b-4aad-4104-af9b-2f993a2b9c30",
      "category": "Clothing",
      "name": "Baby Tool",
      "price": "59.95",
      "sale_price": "53.95",
      "subcategory": "Baby"
    },
    {
      "id": "58a416e3-6501-4e00-9768-5cc5fae16f13",
      "category": "Home",
      "name": "Cleaning Contraption",
      "price": "179",
      "sale_price": "143.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "56a77a1a-82ec-42fc-a99d-a5d2ad31a5e8",
      "category": "Entertainment",
      "name": "Party Gadget",
      "price": "138.95",
      "sale_price": "82",
      "subcategory": "Party"
    },
    {
      "id": "a5592f79-9950-4ea0-8e23-13c122017a61",
      "category": "Entertainment",
      "name": "Book Gear",
      "price": "52",
      "sale_price": "36.95",
      "subcategory": "Book"
    },
    {
      "id": "c99b68fd-b1fc-4889-b2c7-740985385800",
      "category": "Activity",
      "name": "Biking Apparatus",
      "price": "68.99",
      "sale_price": "47.95",
      "subcategory": "Biking"
    },
    {
      "id": "85b407a9-2ca2-48aa-ba3f-c550238e6874",
      "category": "Clothing",
      "name": "Mens Gear",
      "price": "160.99",
      "sale_price": "128.95",
      "subcategory": "Mens"
    },
    {
      "id": "fcc55fda-b158-461b-915d-e3593b90c1e1",
      "category": "Entertainment",
      "name": "Movie Accessory",
      "price": "103",
      "sale_price": "92",
      "subcategory": "Movie"
    },
    {
      "id": "6a6f2bb7-f4c4-48d2-b940-639cd33ca9fe",
      "category": "Pets",
      "name": "Aquarium Equipment",
      "price": "29.99",
      "sale_price": "17.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "61fb9b14-502f-4d84-a020-b5974fb60b68",
      "category": "Electronics",
      "name": "Phone Gear",
      "price": "76.95",
      "sale_price": "60.95",
      "subcategory": "Phone"
    },
    {
      "id": "77ec90d5-be88-41c5-b3d2-72a2a9564e71",
      "category": "Pets",
      "name": "Dog Accessory",
      "price": "167",
      "sale_price": "100.99",
      "subcategory": "Dog"
    },
    {
      "id": "aa9abfc2-7c84-4db3-951c-2f2f56777ac3",
      "category": "Clothing",
      "name": "Jewelry Doodad",
      "price": "33.95",
      "sale_price": "23.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "d87c90c0-58f1-4253-b25d-10507e7c5a7f",
      "category": "Home",
      "name": "Home Improvement Implement",
      "price": "100",
      "sale_price": "60.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "235f7f0e-5ca7-4dbc-9b74-13d6640f125a",
      "category": "Electronics",
      "name": "Phone Gadget",
      "price": "99",
      "sale_price": "89",
      "subcategory": "Phone"
    },
    {
      "id": "415bed72-64c5-4ec3-b921-73a4f1600f76",
      "category": "Entertainment",
      "name": "Party Implement",
      "price": "124",
      "sale_price": "111.95",
      "subcategory": "Party"
    },
    {
      "id": "8d91ec94-021e-4e8b-8447-80137c839356",
      "category": "Clothing",
      "name": "Mens Instrument",
      "price": "179.95",
      "sale_price": "143.99",
      "subcategory": "Mens"
    },
    {
      "id": "d44128fc-e15a-4b66-9b74-3f70f319efa1",
      "category": "Activity",
      "name": "Camping Thingamajig",
      "price": "163.95",
      "sale_price": "130.99",
      "subcategory": "Camping"
    },
    {
      "id": "39ef0869-089e-45e2-909a-35d502cf2639",
      "category": "Electronics",
      "name": "Computer Whatchamacallit",
      "price": "24",
      "sale_price": "19",
      "subcategory": "Computer"
    },
    {
      "id": "aef3c355-bb8d-4586-8e5b-1d63b1cef4ce",
      "category": "Entertainment",
      "name": "Book Equipment",
      "price": "157",
      "sale_price": "109",
      "subcategory": "Book"
    },
    {
      "id": "85b81ec9-ebb5-4c87-91af-2c51cacf5037",
      "category": "Beauty",
      "name": "Bath Instrument",
      "price": "87",
      "sale_price": "60.99",
      "subcategory": "Bath"
    },
    {
      "id": "331e71fe-f5cf-4627-bc26-c7f1bba583fc",
      "category": "Activity",
      "name": "Beach Implement",
      "price": "183.99",
      "sale_price": "109",
      "subcategory": "Beach"
    },
    {
      "id": "44e2d3bb-3fc3-4b4d-987d-2460ceda5431",
      "category": "Health",
      "name": "Vitamin Paraphernalia",
      "price": "68.95",
      "sale_price": "61.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "6cead073-2cf8-4acc-a3ad-eabb58d73898",
      "category": "Clothing",
      "name": "Mens Whatchamacallit",
      "price": "124",
      "sale_price": "99.95",
      "subcategory": "Mens"
    },
    {
      "id": "490a4125-bf0f-47ed-a672-01878b149e73",
      "category": "Health",
      "name": "Medicine Widget",
      "price": "162",
      "sale_price": "97.95",
      "subcategory": "Medicine"
    },
    {
      "id": "433e2a06-409c-4867-820f-db6a0b1367a6",
      "category": "Clothing",
      "name": "Baby Gear",
      "price": "102",
      "sale_price": "81.99",
      "subcategory": "Baby"
    },
    {
      "id": "817db923-b78c-423e-acaa-052af786d05f",
      "category": "Beauty",
      "name": "Skin Care Doodad",
      "price": "192.95",
      "sale_price": "172.99",
      "subcategory": "Skin Care"
    },
    {
      "id": "4480a2c3-3723-487f-8f8b-321ef2eee6bd",
      "category": "Automotive",
      "name": "Truck Component",
      "price": "95.95",
      "sale_price": "57.95",
      "subcategory": "Truck"
    },
    {
      "id": "f0f55ed6-5e9a-49fd-b01d-16c040b8ddd7",
      "category": "Entertainment",
      "name": "Party Component",
      "price": "83.95",
      "sale_price": "66.99",
      "subcategory": "Party"
    },
    {
      "id": "a26caab6-0033-489e-8df4-6aadb08be426",
      "category": "Home",
      "name": "Home Improvement Contraption",
      "price": "93.99",
      "sale_price": "83",
      "subcategory": "Home Improvement"
    },
    {
      "id": "3208fb9c-17a0-40ff-a1df-7111e99f011f",
      "category": "Home",
      "name": "Cooking Gadget",
      "price": "185.99",
      "sale_price": "148.95",
      "subcategory": "Cooking"
    },
    {
      "id": "e18da9ed-caff-42d0-84bd-627f4d2980b2",
      "category": "Beauty",
      "name": "Bath Contraption",
      "price": "12.99",
      "sale_price": "8.99",
      "subcategory": "Bath"
    },
    {
      "id": "37001388-116f-4360-9270-9edbdb11f7fd",
      "category": "Beauty",
      "name": "Makeup Mechanism",
      "price": "121",
      "sale_price": "72.95",
      "subcategory": "Makeup"
    },
    {
      "id": "0916e986-699e-4c60-a0ca-3368064c591f",
      "category": "Home",
      "name": "Bedding Equipment",
      "price": "194",
      "sale_price": "135",
      "subcategory": "Bedding"
    },
    {
      "id": "c530f321-954f-4bb8-aeab-de16fbba18ac",
      "category": "Automotive",
      "name": "Engine Tool",
      "price": "20",
      "sale_price": "14.95",
      "subcategory": "Engine"
    },
    {
      "id": "a884e266-7e39-43e9-822f-a420af21c68d",
      "category": "Activity",
      "name": "Outdoors Implement",
      "price": "179",
      "sale_price": "161.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "c8792204-e68d-4f61-b26a-3d4b545eeed8",
      "category": "Beauty",
      "name": "Personal Gadget",
      "price": "179.99",
      "sale_price": "143",
      "subcategory": "Personal"
    },
    {
      "id": "b5dec80f-a3ce-4ddf-8ae6-e1b75128604d",
      "category": "Activity",
      "name": "Biking Implement",
      "price": "19",
      "sale_price": "13",
      "subcategory": "Biking"
    },
    {
      "id": "305f7da9-1763-4053-ab02-8a3d08f5d685",
      "category": "Electronics",
      "name": "Camera Accessory",
      "price": "139.99",
      "sale_price": "125.99",
      "subcategory": "Camera"
    },
    {
      "id": "7582d58e-9e8a-4306-9502-53f09a9768d2",
      "category": "Electronics",
      "name": "Camera Rig",
      "price": "34.95",
      "sale_price": "30.95",
      "subcategory": "Camera"
    },
    {
      "id": "19c26f19-7b3e-403d-9ed2-408d2b22834b",
      "category": "Pets",
      "name": "Cat Tool",
      "price": "98.95",
      "sale_price": "78.99",
      "subcategory": "Cat"
    },
    {
      "id": "7a55e297-3405-45a2-94d9-e20d7b182013",
      "category": "Entertainment",
      "name": "Book Supplies",
      "price": "176.99",
      "sale_price": "158.99",
      "subcategory": "Book"
    },
    {
      "id": "5289f4eb-ccab-432e-9462-aa8796820c59",
      "category": "Activity",
      "name": "Swimming Whatchamacallit",
      "price": "82",
      "sale_price": "57.95",
      "subcategory": "Swimming"
    },
    {
      "id": "9544e64a-8bf7-4556-b541-931a532079ee",
      "category": "Health",
      "name": "First Aid Mechanism",
      "price": "127",
      "sale_price": "76.99",
      "subcategory": "First Aid"
    },
    {
      "id": "5293cb9d-e28d-41e0-9efb-1c364e3b5f86",
      "category": "Electronics",
      "name": "Computer Gear",
      "price": "195",
      "sale_price": "156.99",
      "subcategory": "Computer"
    },
    {
      "id": "b2fb2f30-3a42-4abf-ac45-014314d60f98",
      "category": "Clothing",
      "name": "Baby Doodad",
      "price": "167.95",
      "sale_price": "150.95",
      "subcategory": "Baby"
    },
    {
      "id": "7bc7bdc8-ec6d-4ba8-85ee-a37fa4f8f4ed",
      "category": "Entertainment",
      "name": "Toy Equipment",
      "price": "182.95",
      "sale_price": "109",
      "subcategory": "Toy"
    },
    {
      "id": "981ff721-4275-4ce2-beb1-8aad05085c1b",
      "category": "Clothing",
      "name": "Womens Gear",
      "price": "102.99",
      "sale_price": "61.95",
      "subcategory": "Womens"
    },
    {
      "id": "dc3e401d-1bc5-48d9-be32-a89126ccac25",
      "category": "Activity",
      "name": "Camping Gizmo",
      "price": "122.95",
      "sale_price": "85",
      "subcategory": "Camping"
    },
    {
      "id": "ffa0cb37-2409-4eff-8dca-fe2f40368499",
      "category": "Health",
      "name": "Nutrition Implement",
      "price": "23.99",
      "sale_price": "13.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "3c07fc21-296e-4271-83fb-46f40127fec3",
      "category": "Activity",
      "name": "Camping Gadget",
      "price": "116.95",
      "sale_price": "104.95",
      "subcategory": "Camping"
    },
    {
      "id": "cf6fa1b9-1625-4f99-a755-2fb72f91f396",
      "category": "Home",
      "name": "Cleaning Contraption",
      "price": "166",
      "sale_price": "132.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "90c69039-ac1d-4719-9c8c-594c5d698a48",
      "category": "Entertainment",
      "name": "Music Apparatus",
      "price": "180",
      "sale_price": "108.99",
      "subcategory": "Music"
    },
    {
      "id": "7bc69540-26fb-4a9d-b6f8-3a1d2bf971ed",
      "category": "Clothing",
      "name": "Baby Mechanism",
      "price": "69.99",
      "sale_price": "41",
      "subcategory": "Baby"
    },
    {
      "id": "e3763537-6c63-4987-8de2-22d9c3b29757",
      "category": "Activity",
      "name": "Beach Machine",
      "price": "134",
      "sale_price": "80.95",
      "subcategory": "Beach"
    },
    {
      "id": "658e4da6-4243-4120-a46b-8257b262d53d",
      "category": "Entertainment",
      "name": "Movie Paraphernalia",
      "price": "17",
      "sale_price": "13",
      "subcategory": "Movie"
    },
    {
      "id": "96658e74-b141-4774-8320-1ce4da438afb",
      "category": "Activity",
      "name": "Outdoors Accessory",
      "price": "33",
      "sale_price": "29.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "a3977900-c310-4e16-8277-0180de6437f1",
      "category": "Home",
      "name": "Furniture Kit",
      "price": "10.95",
      "sale_price": "6.95",
      "subcategory": "Furniture"
    },
    {
      "id": "08e5a3e8-bfe8-48bf-9980-bb116f731c47",
      "category": "Clothing",
      "name": "Jewelry Implement",
      "price": "132.99",
      "sale_price": "79.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "8943b88e-b3f4-4044-8676-a83e4200cfb6",
      "category": "Pets",
      "name": "Aquarium Equipment",
      "price": "33.95",
      "sale_price": "23",
      "subcategory": "Aquarium"
    },
    {
      "id": "d546e028-1445-4d9f-b9be-00b3ced18661",
      "category": "Electronics",
      "name": "Computer Kit",
      "price": "84",
      "sale_price": "50",
      "subcategory": "Computer"
    },
    {
      "id": "243a5ccf-7316-4d3a-9ded-2c39f672dc98",
      "category": "Beauty",
      "name": "Makeup Rig",
      "price": "125.95",
      "sale_price": "112",
      "subcategory": "Makeup"
    },
    {
      "id": "0499127c-2e19-43da-8fb5-cdc35088243d",
      "category": "Home",
      "name": "Storage Gadget",
      "price": "110",
      "sale_price": "77.99",
      "subcategory": "Storage"
    },
    {
      "id": "f2bcd711-bd5a-4bd7-8a31-6d0d5b50f08e",
      "category": "Clothing",
      "name": "Baby Paraphernalia",
      "price": "57.99",
      "sale_price": "39.99",
      "subcategory": "Baby"
    },
    {
      "id": "7be5844f-3816-4529-97a8-81dd5b83669b",
      "category": "Pets",
      "name": "Cat Thingamajig",
      "price": "49.99",
      "sale_price": "34",
      "subcategory": "Cat"
    },
    {
      "id": "6f23218c-80b5-41c0-9584-74be0f0e910b",
      "category": "Clothing",
      "name": "Jewelry Equipment",
      "price": "13.95",
      "sale_price": "7.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "5a73e6d5-fe91-4be4-9237-eccbc1a77514",
      "category": "Health",
      "name": "First Aid Device",
      "price": "70.99",
      "sale_price": "56.95",
      "subcategory": "First Aid"
    },
    {
      "id": "b295d65c-3f35-4a1d-bbbc-cb8728233c61",
      "category": "Entertainment",
      "name": "Book Whatchamacallit",
      "price": "32.99",
      "sale_price": "22",
      "subcategory": "Book"
    },
    {
      "id": "bc05ce9c-8058-401a-9e2a-7428835a64cf",
      "category": "Beauty",
      "name": "Personal Equipment",
      "price": "117",
      "sale_price": "93.99",
      "subcategory": "Personal"
    },
    {
      "id": "5f400539-3e3f-4563-b6a6-e4a21e16866c",
      "category": "Beauty",
      "name": "Personal Item",
      "price": "58.95",
      "sale_price": "34",
      "subcategory": "Personal"
    },
    {
      "id": "c47fb6e0-a9d0-4c71-b221-48ba5a98e984",
      "category": "Activity",
      "name": "Fitness Machine",
      "price": "50.95",
      "sale_price": "45",
      "subcategory": "Fitness"
    },
    {
      "id": "463d1027-8c37-4904-a528-1f71f38211cb",
      "category": "Activity",
      "name": "Biking Paraphernalia",
      "price": "116",
      "sale_price": "104",
      "subcategory": "Biking"
    },
    {
      "id": "f9163be4-503f-4abf-a6b7-b652be690a3f",
      "category": "Health",
      "name": "First Aid Widget",
      "price": "67.95",
      "sale_price": "53.99",
      "subcategory": "First Aid"
    },
    {
      "id": "918677e4-7498-4f66-b7bd-6197bd9ac2e4",
      "category": "Activity",
      "name": "Beach Contraption",
      "price": "59.99",
      "sale_price": "41",
      "subcategory": "Beach"
    },
    {
      "id": "1d9a3494-e256-44ef-8d39-f8b7be56ba2d",
      "category": "Beauty",
      "name": "Makeup Apparatus",
      "price": "12.95",
      "sale_price": "9",
      "subcategory": "Makeup"
    },
    {
      "id": "7e13afda-53e4-420d-8df5-21009f14352e",
      "category": "Home",
      "name": "Cooking Whatchamacallit",
      "price": "51.95",
      "sale_price": "45",
      "subcategory": "Cooking"
    },
    {
      "id": "69f8d19b-c6ed-4729-9075-a410607d993c",
      "category": "Health",
      "name": "Medicine Widget",
      "price": "60.99",
      "sale_price": "54",
      "subcategory": "Medicine"
    },
    {
      "id": "e1e561f0-dba6-4758-9efb-e0ef7159dbc3",
      "category": "Pets",
      "name": "Cat Device",
      "price": "156.99",
      "sale_price": "124.95",
      "subcategory": "Cat"
    },
    {
      "id": "94597bb3-eb8a-4827-9dd3-d5e5aca85f93",
      "category": "Entertainment",
      "name": "Music Paraphernalia",
      "price": "44",
      "sale_price": "26",
      "subcategory": "Music"
    },
    {
      "id": "320a2830-5c5f-4f1c-9c60-709ff8178405",
      "category": "Activity",
      "name": "Swimming Item",
      "price": "178.99",
      "sale_price": "160",
      "subcategory": "Swimming"
    },
    {
      "id": "1e023ca0-c41e-418a-b927-18accac71be5",
      "category": "Entertainment",
      "name": "Toy Apparatus",
      "price": "104",
      "sale_price": "93",
      "subcategory": "Toy"
    },
    {
      "id": "fa235de5-a86f-4ded-ad05-8fb71ccd0e9c",
      "category": "Home",
      "name": "Dining Machine",
      "price": "118.95",
      "sale_price": "94.99",
      "subcategory": "Dining"
    },
    {
      "id": "26aeca1d-6698-4a82-8e8c-c1aab09bdb05",
      "category": "Activity",
      "name": "Outdoors Machine",
      "price": "77",
      "sale_price": "61.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "80d797e4-b890-4cab-97f8-41b3d917e0f0",
      "category": "Clothing",
      "name": "Jewelry Paraphernalia",
      "price": "85",
      "sale_price": "51.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "edbedeca-6075-4504-a200-d3177bfec4e2",
      "category": "Electronics",
      "name": "Computer Item",
      "price": "194.95",
      "sale_price": "116.99",
      "subcategory": "Computer"
    },
    {
      "id": "a7effa0e-6615-4b5a-a254-61ba99af2799",
      "category": "Beauty",
      "name": "Bath Thingamajig",
      "price": "34.95",
      "sale_price": "27",
      "subcategory": "Bath"
    },
    {
      "id": "fdd8bdb8-0c23-4b48-acab-c27cd2bdf4b0",
      "category": "Automotive",
      "name": "Car Implement",
      "price": "175.99",
      "sale_price": "105.95",
      "subcategory": "Car"
    },
    {
      "id": "b0aaee2e-c149-4818-a002-4cda6942dc0a",
      "category": "Pets",
      "name": "Cat Equipment",
      "price": "173.99",
      "sale_price": "103.99",
      "subcategory": "Cat"
    },
    {
      "id": "8163a434-488c-4512-8f43-2ae3bb4d5da1",
      "category": "Activity",
      "name": "Swimming Attachment",
      "price": "47.95",
      "sale_price": "28",
      "subcategory": "Swimming"
    },
    {
      "id": "67139b46-8e46-4f17-9d6c-73c4a1005f00",
      "category": "Automotive",
      "name": "Tire Mechanism",
      "price": "127",
      "sale_price": "114",
      "subcategory": "Tire"
    },
    {
      "id": "eaeb3c00-993d-4e33-8959-cad1c6d22c4f",
      "category": "Activity",
      "name": "Sports Gizmo",
      "price": "59",
      "sale_price": "41.95",
      "subcategory": "Sports"
    },
    {
      "id": "b9e637fe-1065-426a-af50-fa1ed8fdeb45",
      "category": "Home",
      "name": "Cleaning Doodad",
      "price": "31.95",
      "sale_price": "21",
      "subcategory": "Cleaning"
    },
    {
      "id": "53e46907-8db2-440d-8d0e-a9cbb42e1b9c",
      "category": "Activity",
      "name": "Swimming Instrument",
      "price": "33.95",
      "sale_price": "29",
      "subcategory": "Swimming"
    },
    {
      "id": "916674e3-716e-4854-9cc7-0ad914b7b658",
      "category": "Entertainment",
      "name": "Party Widget",
      "price": "90",
      "sale_price": "81.99",
      "subcategory": "Party"
    },
    {
      "id": "c9074d4d-09fc-424c-83a5-81fbbd141fe1",
      "category": "Health",
      "name": "Medicine Gear",
      "price": "50",
      "sale_price": "30.99",
      "subcategory": "Medicine"
    },
    {
      "id": "0652b2e2-2e28-4c24-871e-78176d833557",
      "category": "Automotive",
      "name": "Tire Thingamajig",
      "price": "159.99",
      "sale_price": "111",
      "subcategory": "Tire"
    },
    {
      "id": "3acffe8d-9afb-4c01-86e2-a607f93df52c",
      "category": "Home",
      "name": "Dining Gear",
      "price": "91.99",
      "sale_price": "72.99",
      "subcategory": "Dining"
    },
    {
      "id": "d081fc9f-8672-46ec-ab6d-cda8328964a6",
      "category": "Activity",
      "name": "Camping Tool",
      "price": "128.99",
      "sale_price": "89",
      "subcategory": "Camping"
    },
    {
      "id": "affbb908-0d46-45ed-b5bc-cc580049451b",
      "category": "Automotive",
      "name": "Truck Gizmo",
      "price": "122.99",
      "sale_price": "109.95",
      "subcategory": "Truck"
    },
    {
      "id": "967dcba8-bcbd-4a35-8a56-751759c7175a",
      "category": "Home",
      "name": "Dining Thingamajig",
      "price": "168.95",
      "sale_price": "117",
      "subcategory": "Dining"
    },
    {
      "id": "5bdd7863-bef6-47e4-a78d-e5937cdba881",
      "category": "Pets",
      "name": "Cat Rig",
      "price": "186.95",
      "sale_price": "130.99",
      "subcategory": "Cat"
    },
    {
      "id": "20903336-6369-4ee4-96c7-4a425b1f3368",
      "category": "Automotive",
      "name": "Car Contraption",
      "price": "115.95",
      "sale_price": "69",
      "subcategory": "Car"
    },
    {
      "id": "14dfa1ea-c1a5-4cc9-be59-f621cd3a42e7",
      "category": "Electronics",
      "name": "Computer Item",
      "price": "43.95",
      "sale_price": "25.95",
      "subcategory": "Computer"
    },
    {
      "id": "d9478706-c696-4609-bf13-347b1baa005b",
      "category": "Home",
      "name": "Cleaning Mechanism",
      "price": "13",
      "sale_price": "7.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "6a067a64-fe35-4993-9bf7-7958afc25be9",
      "category": "Pets",
      "name": "Aquarium Apparatus",
      "price": "156.95",
      "sale_price": "109",
      "subcategory": "Aquarium"
    },
    {
      "id": "7e757f65-e0b1-4e42-a8da-25753f6a1758",
      "category": "Clothing",
      "name": "Jewelry Attachment",
      "price": "54.95",
      "sale_price": "43.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "aea98aa1-e315-40ba-a7dc-1f2977b8b209",
      "category": "Activity",
      "name": "Beach Widget",
      "price": "75.95",
      "sale_price": "60.99",
      "subcategory": "Beach"
    },
    {
      "id": "ea4931c6-b980-48c9-bb0a-0edb6c64e78b",
      "category": "Activity",
      "name": "Beach Thingamajig",
      "price": "36.99",
      "sale_price": "21.99",
      "subcategory": "Beach"
    },
    {
      "id": "2710650c-456d-4ad4-8f99-f500e60707cb",
      "category": "Home",
      "name": "Home Improvement Apparatus",
      "price": "45",
      "sale_price": "40.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "89e4626d-dcd0-424f-8411-9685802d232b",
      "category": "Activity",
      "name": "Fitness Rig",
      "price": "160",
      "sale_price": "96",
      "subcategory": "Fitness"
    },
    {
      "id": "c8643328-cb58-4bea-b8bc-35dcf34ec010",
      "category": "Home",
      "name": "Furniture Instrument",
      "price": "59",
      "sale_price": "35",
      "subcategory": "Furniture"
    },
    {
      "id": "a6f9c36d-bd80-4f05-b281-16aec665c1f5",
      "category": "Clothing",
      "name": "Kids Kit",
      "price": "160",
      "sale_price": "128.99",
      "subcategory": "Kids"
    },
    {
      "id": "54df8520-4d3a-4536-a533-13168015905b",
      "category": "Health",
      "name": "Medicine Whatchamacallit",
      "price": "121.99",
      "sale_price": "72",
      "subcategory": "Medicine"
    },
    {
      "id": "285551af-8ae9-4bdb-97a9-dcabc5679845",
      "category": "Entertainment",
      "name": "Party Gadget",
      "price": "20.95",
      "sale_price": "16.95",
      "subcategory": "Party"
    },
    {
      "id": "38b5a575-fd73-4c2a-97b5-2653548b911a",
      "category": "Entertainment",
      "name": "Toy Paraphernalia",
      "price": "26.99",
      "sale_price": "15.99",
      "subcategory": "Toy"
    },
    {
      "id": "5150b122-6ea3-40bc-aa98-eb4610f8d82b",
      "category": "Health",
      "name": "Nutrition Gear",
      "price": "182.99",
      "sale_price": "163.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "e4117663-bf77-4252-a1ad-19be926eda5f",
      "category": "Entertainment",
      "name": "Game Attachment",
      "price": "135.95",
      "sale_price": "94.95",
      "subcategory": "Game"
    },
    {
      "id": "915df7f2-023d-4a5a-a9ed-bc97bfb37e8a",
      "category": "Entertainment",
      "name": "Book Rig",
      "price": "173",
      "sale_price": "138",
      "subcategory": "Book"
    },
    {
      "id": "80820c0e-5cd4-4a37-8e8f-06ea50fddceb",
      "category": "Health",
      "name": "Nutrition Gadget",
      "price": "25.99",
      "sale_price": "15",
      "subcategory": "Nutrition"
    },
    {
      "id": "39337503-e421-4852-977f-efe62b74a003",
      "category": "Clothing",
      "name": "Jewelry Accessory",
      "price": "142.99",
      "sale_price": "85.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "4ffccf83-8e1d-4416-b795-876a55ecbb47",
      "category": "Home",
      "name": "Kitchen Instrument",
      "price": "79.99",
      "sale_price": "55.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "ac5afac9-ea90-4fb7-8bd1-6f238ec83dc6",
      "category": "Health",
      "name": "First Aid Doodad",
      "price": "170.99",
      "sale_price": "102",
      "subcategory": "First Aid"
    },
    {
      "id": "af75d360-064b-446b-b362-6686083c6861",
      "category": "Entertainment",
      "name": "Game Gizmo",
      "price": "64.95",
      "sale_price": "51.99",
      "subcategory": "Game"
    },
    {
      "id": "147419a8-3d82-4193-8577-f30787a77fa3",
      "category": "Activity",
      "name": "Fitness Contraption",
      "price": "92.95",
      "sale_price": "64.95",
      "subcategory": "Fitness"
    },
    {
      "id": "db3c77ae-5010-4719-a2e5-6de0553c70e9",
      "category": "Beauty",
      "name": "Makeup Gizmo",
      "price": "43.99",
      "sale_price": "30.99",
      "subcategory": "Makeup"
    },
    {
      "id": "5d01464c-997f-4394-8160-cd8ffe1d1fd5",
      "category": "Clothing",
      "name": "Kids Rig",
      "price": "81.95",
      "sale_price": "64",
      "subcategory": "Kids"
    },
    {
      "id": "035bc8bd-de02-4f02-b953-aab9ea20a4fa",
      "category": "Home",
      "name": "Dining Attachment",
      "price": "75.95",
      "sale_price": "52.99",
      "subcategory": "Dining"
    },
    {
      "id": "bac6220d-1b83-40a1-91d9-0e90a56102ff",
      "category": "Health",
      "name": "Medicine Equipment",
      "price": "120",
      "sale_price": "84",
      "subcategory": "Medicine"
    },
    {
      "id": "ff313a4a-6eb2-4042-b118-f4028630a126",
      "category": "Entertainment",
      "name": "Movie Gizmo",
      "price": "120.95",
      "sale_price": "72.95",
      "subcategory": "Movie"
    },
    {
      "id": "2f20763b-75a5-41c7-8d80-9ca91db0adb6",
      "category": "Health",
      "name": "Nutrition Item",
      "price": "71",
      "sale_price": "49",
      "subcategory": "Nutrition"
    },
    {
      "id": "75c58256-36d4-45df-973d-4b4dc3dece4e",
      "category": "Entertainment",
      "name": "Music Kit",
      "price": "138.95",
      "sale_price": "124.95",
      "subcategory": "Music"
    },
    {
      "id": "bd3f1a00-3fe8-49a7-ad87-4159cbb36f46",
      "category": "Automotive",
      "name": "Tire Device",
      "price": "33",
      "sale_price": "29.95",
      "subcategory": "Tire"
    },
    {
      "id": "33671bc6-d88f-4e94-9e30-818fef42b83b",
      "category": "Electronics",
      "name": "Camera Device",
      "price": "72",
      "sale_price": "64.95",
      "subcategory": "Camera"
    },
    {
      "id": "766b3017-4855-4d8a-a74a-8af5bc770a99",
      "category": "Pets",
      "name": "Dog Supplies",
      "price": "170.95",
      "sale_price": "153",
      "subcategory": "Dog"
    },
    {
      "id": "1213dd9b-efa2-48ff-88db-563ed1a1b7f0",
      "category": "Electronics",
      "name": "Computer Paraphernalia",
      "price": "67",
      "sale_price": "53.95",
      "subcategory": "Computer"
    },
    {
      "id": "0202cf23-89a6-451f-bc73-99928854c140",
      "category": "Activity",
      "name": "Camping Contraption",
      "price": "145",
      "sale_price": "87.99",
      "subcategory": "Camping"
    },
    {
      "id": "cc18fa08-9612-4da2-8af2-7d795da8b552",
      "category": "Activity",
      "name": "Fitness Apparatus",
      "price": "43",
      "sale_price": "34.95",
      "subcategory": "Fitness"
    },
    {
      "id": "cfa9dec5-bae6-426c-a7e2-fe8058a40638",
      "category": "Clothing",
      "name": "Mens Kit",
      "price": "20",
      "sale_price": "12",
      "subcategory": "Mens"
    },
    {
      "id": "3fe87682-0737-4d23-ab4e-8be3a0a0d4b2",
      "category": "Entertainment",
      "name": "Game Supplies",
      "price": "131",
      "sale_price": "104.99",
      "subcategory": "Game"
    },
    {
      "id": "c9580324-e625-44bf-942d-89402c23d5cb",
      "category": "Automotive",
      "name": "Engine Supplies",
      "price": "132.95",
      "sale_price": "79",
      "subcategory": "Engine"
    },
    {
      "id": "49f026e7-008a-46be-af3c-bc5261c9f074",
      "category": "Electronics",
      "name": "Camera Machine",
      "price": "14.99",
      "sale_price": "12",
      "subcategory": "Camera"
    },
    {
      "id": "ee1fa7b7-624b-45ae-bc1e-74fb91ec1bea",
      "category": "Beauty",
      "name": "Makeup Attachment",
      "price": "109.99",
      "sale_price": "65",
      "subcategory": "Makeup"
    },
    {
      "id": "8aa8b268-fa85-4d95-a4f4-c7735e616b56",
      "category": "Electronics",
      "name": "Camera Mechanism",
      "price": "164.95",
      "sale_price": "98.99",
      "subcategory": "Camera"
    },
    {
      "id": "f2290be1-14e7-4a26-b1da-cb0898ab9e5b",
      "category": "Home",
      "name": "Dining Mechanism",
      "price": "58.95",
      "sale_price": "40",
      "subcategory": "Dining"
    },
    {
      "id": "d9e81339-bad0-451f-a3f3-d91d5ad8bedc",
      "category": "Automotive",
      "name": "Truck Item",
      "price": "184",
      "sale_price": "110.95",
      "subcategory": "Truck"
    },
    {
      "id": "9d7c891f-67be-4e42-90af-d52f8b5a102a",
      "category": "Automotive",
      "name": "Tire Doodad",
      "price": "77.99",
      "sale_price": "46.99",
      "subcategory": "Tire"
    },
    {
      "id": "32adfd55-17a8-4aad-81cd-2fb483e18a59",
      "category": "Home",
      "name": "Dining Doodad",
      "price": "147",
      "sale_price": "117.99",
      "subcategory": "Dining"
    },
    {
      "id": "8da7b0c9-cf10-46ce-a54d-7b9283a5f8a8",
      "category": "Activity",
      "name": "Biking Equipment",
      "price": "81.99",
      "sale_price": "48.95",
      "subcategory": "Biking"
    },
    {
      "id": "95134df7-7618-4363-9bb2-3fac1a8d7a51",
      "category": "Clothing",
      "name": "Mens Thingamajig",
      "price": "51.95",
      "sale_price": "45",
      "subcategory": "Mens"
    },
    {
      "id": "093f0953-4ff4-408c-b085-37a51669a0c2",
      "category": "Activity",
      "name": "Beach Doodad",
      "price": "183",
      "sale_price": "164.95",
      "subcategory": "Beach"
    },
    {
      "id": "998143c6-151f-417b-ad20-0d976da7e0e2",
      "category": "Clothing",
      "name": "Kids Paraphernalia",
      "price": "87",
      "sale_price": "60.99",
      "subcategory": "Kids"
    },
    {
      "id": "c6645b69-968a-4209-840f-443ab8041224",
      "category": "Pets",
      "name": "Dog Gadget",
      "price": "166.99",
      "sale_price": "149.99",
      "subcategory": "Dog"
    },
    {
      "id": "f5b4fd4b-fc66-4d76-9a2f-6dad440d0273",
      "category": "Clothing",
      "name": "Womens Supplies",
      "price": "79.95",
      "sale_price": "63",
      "subcategory": "Womens"
    },
    {
      "id": "58b5ad67-32ac-4752-beb3-6513295d9baa",
      "category": "Automotive",
      "name": "Car Thingamajig",
      "price": "145",
      "sale_price": "87.95",
      "subcategory": "Car"
    },
    {
      "id": "7b813c7e-862b-453e-ac64-aff5a686de68",
      "category": "Health",
      "name": "Nutrition Supplies",
      "price": "86.95",
      "sale_price": "77.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "8f354d88-8572-4c4c-a6d6-389d1a315056",
      "category": "Entertainment",
      "name": "Book Kit",
      "price": "107.95",
      "sale_price": "85",
      "subcategory": "Book"
    },
    {
      "id": "455734f1-124c-48ac-a645-843d21d7d3e1",
      "category": "Pets",
      "name": "Dog Mechanism",
      "price": "64.99",
      "sale_price": "57.95",
      "subcategory": "Dog"
    },
    {
      "id": "3a78b260-187f-4b62-b348-3c4dce873146",
      "category": "Health",
      "name": "Vitamin Attachment",
      "price": "12.95",
      "sale_price": "9.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "c5f18986-b3d1-4a0f-8539-57a79ebd29ec",
      "category": "Electronics",
      "name": "Computer Thingamajig",
      "price": "14",
      "sale_price": "8.95",
      "subcategory": "Computer"
    },
    {
      "id": "dcfc6340-378c-4020-8cbe-7fd67b4dee8d",
      "category": "Home",
      "name": "Bedding Rig",
      "price": "122",
      "sale_price": "109.99",
      "subcategory": "Bedding"
    },
    {
      "id": "ff0a71e5-d756-4481-938e-da1d1faff245",
      "category": "Entertainment",
      "name": "Movie Widget",
      "price": "51.99",
      "sale_price": "30",
      "subcategory": "Movie"
    },
    {
      "id": "287dafb2-ccf8-493e-bb6e-75eb8f8a940f",
      "category": "Pets",
      "name": "Aquarium Tool",
      "price": "190.95",
      "sale_price": "171",
      "subcategory": "Aquarium"
    },
    {
      "id": "ba986400-4473-49a2-b442-1336ecd6cad3",
      "category": "Clothing",
      "name": "Womens Device",
      "price": "142.95",
      "sale_price": "85",
      "subcategory": "Womens"
    },
    {
      "id": "c813270e-3951-40e1-84d6-3ea941b6729a",
      "category": "Electronics",
      "name": "Camera Thingamajig",
      "price": "92.95",
      "sale_price": "55",
      "subcategory": "Camera"
    },
    {
      "id": "ab006fee-c75f-4aad-bc56-3a18adab2df6",
      "category": "Automotive",
      "name": "Engine Paraphernalia",
      "price": "60.95",
      "sale_price": "36.95",
      "subcategory": "Engine"
    },
    {
      "id": "702b4d2e-4800-406c-aa0e-3e70f74b64c8",
      "category": "Automotive",
      "name": "Truck Tool",
      "price": "123",
      "sale_price": "110",
      "subcategory": "Truck"
    },
    {
      "id": "1106dbe2-f5e4-426f-8b0d-f52bf78968e7",
      "category": "Entertainment",
      "name": "Game Accessory",
      "price": "95.95",
      "sale_price": "85.99",
      "subcategory": "Game"
    },
    {
      "id": "b8dc9dfd-5367-4d97-ad72-fe848fc073d1",
      "category": "Health",
      "name": "Vitamin Device",
      "price": "23",
      "sale_price": "16.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "1c7e6a60-9219-48cd-80ea-246a40d96031",
      "category": "Activity",
      "name": "Outdoors Paraphernalia",
      "price": "109",
      "sale_price": "98.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "51ba5a15-e1c5-4d74-a9cd-86bd7bf4f2b8",
      "category": "Home",
      "name": "Home Improvement Instrument",
      "price": "65",
      "sale_price": "39.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "5e544f49-0d2c-42de-b0a9-151ca4765de0",
      "category": "Home",
      "name": "Gardening Instrument",
      "price": "13.95",
      "sale_price": "7.99",
      "subcategory": "Gardening"
    },
    {
      "id": "6926a8fc-a967-4dcb-90b1-37e503eea8d5",
      "category": "Home",
      "name": "Bedding Machine",
      "price": "73.95",
      "sale_price": "51.99",
      "subcategory": "Bedding"
    },
    {
      "id": "ab5b17ad-657b-442c-b9a6-0b0f716380c9",
      "category": "Activity",
      "name": "Fitness Accessory",
      "price": "198",
      "sale_price": "118.99",
      "subcategory": "Fitness"
    },
    {
      "id": "9df2246e-9b3c-41a8-881e-9a89232b2fc8",
      "category": "Pets",
      "name": "Cat Device",
      "price": "197.99",
      "sale_price": "157.99",
      "subcategory": "Cat"
    },
    {
      "id": "f01b9aac-46f4-48e0-93a0-aa26c5148a4c",
      "category": "Home",
      "name": "Cooking Tool",
      "price": "166.99",
      "sale_price": "149.95",
      "subcategory": "Cooking"
    },
    {
      "id": "502c5414-da1e-4850-a71c-f9db06f412d5",
      "category": "Entertainment",
      "name": "Book Instrument",
      "price": "23.99",
      "sale_price": "20.95",
      "subcategory": "Book"
    },
    {
      "id": "0976d23b-5481-4ee1-b5dd-5d7432d85665",
      "category": "Automotive",
      "name": "Engine Paraphernalia",
      "price": "63",
      "sale_price": "37",
      "subcategory": "Engine"
    },
    {
      "id": "589677ee-afdc-40a0-84f1-faa64641cfdb",
      "category": "Entertainment",
      "name": "Game Apparatus",
      "price": "137",
      "sale_price": "109",
      "subcategory": "Game"
    },
    {
      "id": "b04a2385-7604-48dd-83fa-c0b9f41d8563",
      "category": "Electronics",
      "name": "Computer Component",
      "price": "24",
      "sale_price": "21.99",
      "subcategory": "Computer"
    },
    {
      "id": "2f873d3c-b39c-44cb-82d1-5a627cd18488",
      "category": "Home",
      "name": "Bedding Instrument",
      "price": "79.99",
      "sale_price": "63.99",
      "subcategory": "Bedding"
    },
    {
      "id": "3fd9924c-eb46-43b5-97b7-03260a8cdf38",
      "category": "Health",
      "name": "Medicine Machine",
      "price": "162",
      "sale_price": "113.95",
      "subcategory": "Medicine"
    },
    {
      "id": "31b4dfab-c819-4da0-98c5-10068f92c7d2",
      "category": "Activity",
      "name": "Swimming Doodad",
      "price": "80.99",
      "sale_price": "56.95",
      "subcategory": "Swimming"
    },
    {
      "id": "3264d139-3df3-4628-a99b-e8891056f1f0",
      "category": "Activity",
      "name": "Fitness Rig",
      "price": "60.95",
      "sale_price": "48",
      "subcategory": "Fitness"
    },
    {
      "id": "cec94ac4-66d8-4c09-a9d1-e5bf3ddce781",
      "category": "Entertainment",
      "name": "Movie Contraption",
      "price": "167.95",
      "sale_price": "116.95",
      "subcategory": "Movie"
    },
    {
      "id": "e4dd29dc-69f5-4d21-be14-7b0459c49815",
      "category": "Clothing",
      "name": "Mens Mechanism",
      "price": "10",
      "sale_price": "9",
      "subcategory": "Mens"
    },
    {
      "id": "167e1288-2cbe-4014-b768-bc4fe0f77497",
      "category": "Entertainment",
      "name": "Movie Accessory",
      "price": "102.99",
      "sale_price": "61.95",
      "subcategory": "Movie"
    },
    {
      "id": "07f59af1-35a6-4f92-81b9-fa6881a58edc",
      "category": "Activity",
      "name": "Swimming Attachment",
      "price": "16.99",
      "sale_price": "14.95",
      "subcategory": "Swimming"
    },
    {
      "id": "8a20120f-1760-45af-a393-b00d2246b586",
      "category": "Electronics",
      "name": "Phone Contraption",
      "price": "50.95",
      "sale_price": "30.95",
      "subcategory": "Phone"
    },
    {
      "id": "a6c3d318-8df3-4498-8674-088c1552eabe",
      "category": "Beauty",
      "name": "Bath Thingamajig",
      "price": "197.99",
      "sale_price": "118.99",
      "subcategory": "Bath"
    },
    {
      "id": "c99416f8-0fa2-4020-aea4-2264495ed531",
      "category": "Home",
      "name": "Gardening Gizmo",
      "price": "54.95",
      "sale_price": "37.95",
      "subcategory": "Gardening"
    },
    {
      "id": "8757681c-ebcb-41ce-8345-cdad11967e1f",
      "category": "Entertainment",
      "name": "Party Contraption",
      "price": "177.95",
      "sale_price": "123",
      "subcategory": "Party"
    },
    {
      "id": "d70af026-4389-4b00-a68e-48a6e6a7e599",
      "category": "Beauty",
      "name": "Hair Care Component",
      "price": "53",
      "sale_price": "42.95",
      "subcategory": "Hair Care"
    },
    {
      "id": "7e2a6498-191f-44d3-8830-3b5d82cb18f9",
      "category": "Clothing",
      "name": "Mens Doodad",
      "price": "52.99",
      "sale_price": "36",
      "subcategory": "Mens"
    },
    {
      "id": "75a82abe-c556-46f0-88bb-e91c849a1272",
      "category": "Electronics",
      "name": "Technology Tool",
      "price": "176",
      "sale_price": "105.95",
      "subcategory": "Technology"
    },
    {
      "id": "8cbafea6-ddc9-4f66-82e3-c8d4b88e15ec",
      "category": "Activity",
      "name": "Outdoors Gizmo",
      "price": "105.99",
      "sale_price": "94",
      "subcategory": "Outdoors"
    },
    {
      "id": "6bbfcd80-4a01-4543-9603-a6724303010e",
      "category": "Activity",
      "name": "Sports Gadget",
      "price": "42.95",
      "sale_price": "37",
      "subcategory": "Sports"
    },
    {
      "id": "e715c9f8-0288-42eb-b49c-035dff972ae0",
      "category": "Beauty",
      "name": "Skin Care Instrument",
      "price": "82.95",
      "sale_price": "73.95",
      "subcategory": "Skin Care"
    },
    {
      "id": "19444bc6-30ef-4fe3-98dc-44f56c201dd0",
      "category": "Clothing",
      "name": "Womens Accessory",
      "price": "24",
      "sale_price": "14.99",
      "subcategory": "Womens"
    },
    {
      "id": "25a65093-f659-4024-a7cb-d163c1b59b62",
      "category": "Entertainment",
      "name": "Movie Rig",
      "price": "156.99",
      "sale_price": "109.99",
      "subcategory": "Movie"
    },
    {
      "id": "fb5c0243-1586-473a-a208-73d1da147ad9",
      "category": "Clothing",
      "name": "Mens Rig",
      "price": "120.99",
      "sale_price": "72.95",
      "subcategory": "Mens"
    },
    {
      "id": "6a9699a3-a1cc-413f-89fc-d1b8dd1eddf4",
      "category": "Health",
      "name": "Nutrition Apparatus",
      "price": "60.99",
      "sale_price": "36",
      "subcategory": "Nutrition"
    },
    {
      "id": "47103ef3-67aa-4154-a260-5af67f520cc6",
      "category": "Entertainment",
      "name": "Movie Gadget",
      "price": "123",
      "sale_price": "73",
      "subcategory": "Movie"
    },
    {
      "id": "a38ffeb1-effa-4d05-8297-2a3e4c93d8ad",
      "category": "Electronics",
      "name": "Camera Gizmo",
      "price": "29.99",
      "sale_price": "23.99",
      "subcategory": "Camera"
    },
    {
      "id": "c90facd2-b09c-4813-828b-fb5d169ae724",
      "category": "Health",
      "name": "Nutrition Device",
      "price": "196.99",
      "sale_price": "137.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "a0afd5cb-1ad7-4e68-b07b-1506c5cc1717",
      "category": "Entertainment",
      "name": "Toy Whatchamacallit",
      "price": "10",
      "sale_price": "6.95",
      "subcategory": "Toy"
    },
    {
      "id": "ae040f85-8eb0-4930-9fa2-3d60fe4085da",
      "category": "Home",
      "name": "Kitchen Item",
      "price": "13",
      "sale_price": "7.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "0c25511a-ceba-4c66-ba39-69f2c3960413",
      "category": "Electronics",
      "name": "Phone Doodad",
      "price": "160.95",
      "sale_price": "96",
      "subcategory": "Phone"
    },
    {
      "id": "ba66245c-5e22-4dc9-8229-9ec42882664a",
      "category": "Activity",
      "name": "Outdoors Gizmo",
      "price": "139",
      "sale_price": "125",
      "subcategory": "Outdoors"
    },
    {
      "id": "6d0772a7-9297-42ce-bc30-f07ba05caa10",
      "category": "Home",
      "name": "Furniture Gear",
      "price": "173.95",
      "sale_price": "121",
      "subcategory": "Furniture"
    },
    {
      "id": "91277fd9-32c9-492b-aef0-b70d4b1d2427",
      "category": "Home",
      "name": "Home Improvement Machine",
      "price": "142.99",
      "sale_price": "113.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "c9c22675-56ea-40b0-89b6-8bb47b969bf9",
      "category": "Electronics",
      "name": "Technology Doodad",
      "price": "71.99",
      "sale_price": "49.99",
      "subcategory": "Technology"
    },
    {
      "id": "e05f37cf-adda-4db8-ab79-9b727cef10d8",
      "category": "Beauty",
      "name": "Hair Care Device",
      "price": "43.99",
      "sale_price": "25.95",
      "subcategory": "Hair Care"
    },
    {
      "id": "84143696-d6af-4232-a3ec-f5574b597498",
      "category": "Entertainment",
      "name": "Book Implement",
      "price": "193.99",
      "sale_price": "154",
      "subcategory": "Book"
    },
    {
      "id": "1dca2e56-c976-4dac-9ed8-34a4c33f429b",
      "category": "Automotive",
      "name": "Engine Equipment",
      "price": "143.95",
      "sale_price": "128.95",
      "subcategory": "Engine"
    },
    {
      "id": "2d4918b5-9446-428b-b518-d08247c070bc",
      "category": "Health",
      "name": "Nutrition Contraption",
      "price": "169.95",
      "sale_price": "152",
      "subcategory": "Nutrition"
    },
    {
      "id": "5f1a7a9c-9890-43d5-a58a-34784115834b",
      "category": "Entertainment",
      "name": "Music Device",
      "price": "96",
      "sale_price": "86",
      "subcategory": "Music"
    },
    {
      "id": "48190226-8219-4135-82c3-892f739af34b",
      "category": "Beauty",
      "name": "Makeup Kit",
      "price": "150.95",
      "sale_price": "135.99",
      "subcategory": "Makeup"
    },
    {
      "id": "47a95ab2-32d9-469e-8bd2-ac50e7130dca",
      "category": "Clothing",
      "name": "Baby Attachment",
      "price": "36.95",
      "sale_price": "28.95",
      "subcategory": "Baby"
    },
    {
      "id": "37be8c3b-6ac3-4593-8c99-3db39f88a294",
      "category": "Health",
      "name": "First Aid Thingamajig",
      "price": "75.95",
      "sale_price": "45.99",
      "subcategory": "First Aid"
    },
    {
      "id": "2a36fdff-7cb6-4cf6-a78c-eab0a581f22d",
      "category": "Entertainment",
      "name": "Book Rig",
      "price": "14",
      "sale_price": "12.95",
      "subcategory": "Book"
    },
    {
      "id": "ba6a033c-753a-4a40-be9c-f1dc73c0e0db",
      "category": "Entertainment",
      "name": "Toy Equipment",
      "price": "162.99",
      "sale_price": "145.95",
      "subcategory": "Toy"
    },
    {
      "id": "81118f88-7244-428a-bb96-b25c1e386da7",
      "category": "Home",
      "name": "Gardening Device",
      "price": "36.95",
      "sale_price": "25.95",
      "subcategory": "Gardening"
    },
    {
      "id": "73c687fe-bbae-4f6e-b09d-2e58f5a84a4f",
      "category": "Entertainment",
      "name": "Toy Tool",
      "price": "40.99",
      "sale_price": "24.95",
      "subcategory": "Toy"
    },
    {
      "id": "c5cdeb82-e2d9-4c66-99c4-fcf485a6a0ee",
      "category": "Home",
      "name": "Cooking Device",
      "price": "44",
      "sale_price": "30.95",
      "subcategory": "Cooking"
    },
    {
      "id": "2f89ec3b-8b55-4420-b788-d0308c5ef33b",
      "category": "Home",
      "name": "Cooking Widget",
      "price": "101.95",
      "sale_price": "90",
      "subcategory": "Cooking"
    },
    {
      "id": "debddfae-3451-4861-9084-d90b6d8b3a93",
      "category": "Automotive",
      "name": "Tire Equipment",
      "price": "195",
      "sale_price": "136.99",
      "subcategory": "Tire"
    },
    {
      "id": "d91180d9-910f-4efd-888e-be40143fd2d1",
      "category": "Clothing",
      "name": "Mens Kit",
      "price": "86",
      "sale_price": "51.99",
      "subcategory": "Mens"
    },
    {
      "id": "40517b32-509d-4d2c-a609-6b39b5866fc8",
      "category": "Activity",
      "name": "Beach Gear",
      "price": "73.99",
      "sale_price": "65.95",
      "subcategory": "Beach"
    },
    {
      "id": "6eeb4a02-586f-4bb9-a434-a19c082ba8f6",
      "category": "Electronics",
      "name": "Technology Gear",
      "price": "142.99",
      "sale_price": "127.95",
      "subcategory": "Technology"
    },
    {
      "id": "1e138b4a-1aa3-492e-88ae-98969d7c63c4",
      "category": "Entertainment",
      "name": "Movie Supplies",
      "price": "171.95",
      "sale_price": "136.99",
      "subcategory": "Movie"
    },
    {
      "id": "b14a1a0b-328a-4501-bab2-9baa46a27582",
      "category": "Home",
      "name": "Dining Gizmo",
      "price": "123.99",
      "sale_price": "98.99",
      "subcategory": "Dining"
    },
    {
      "id": "a4d99a96-1171-4c08-9fd7-88045e041e49",
      "category": "Electronics",
      "name": "Phone Gadget",
      "price": "198",
      "sale_price": "158.95",
      "subcategory": "Phone"
    },
    {
      "id": "4bef306f-4339-4663-afc0-59c24b5abc30",
      "category": "Clothing",
      "name": "Mens Gadget",
      "price": "14.95",
      "sale_price": "12.99",
      "subcategory": "Mens"
    },
    {
      "id": "b7c68415-1ff9-44ff-8b0f-1094b0d16536",
      "category": "Health",
      "name": "First Aid Gadget",
      "price": "110.99",
      "sale_price": "99.99",
      "subcategory": "First Aid"
    },
    {
      "id": "69e88cae-1462-4335-a7fd-e5e4fc9d7b1a",
      "category": "Pets",
      "name": "Aquarium Doodad",
      "price": "17",
      "sale_price": "13",
      "subcategory": "Aquarium"
    },
    {
      "id": "05c4093a-7102-48ff-bc64-fbab0e60bd20",
      "category": "Beauty",
      "name": "Skin Care Accessory",
      "price": "133",
      "sale_price": "79",
      "subcategory": "Skin Care"
    },
    {
      "id": "0976bc71-e6e8-4bbe-bbcb-3095db06e393",
      "category": "Pets",
      "name": "Dog Paraphernalia",
      "price": "95",
      "sale_price": "85.99",
      "subcategory": "Dog"
    },
    {
      "id": "dd4c9197-f701-41e9-9b76-ead0a6e21382",
      "category": "Electronics",
      "name": "Technology Item",
      "price": "190",
      "sale_price": "152.99",
      "subcategory": "Technology"
    },
    {
      "id": "2374728d-6f2b-41f9-b916-bb57d4fe74c9",
      "category": "Health",
      "name": "Nutrition Accessory",
      "price": "58.99",
      "sale_price": "52",
      "subcategory": "Nutrition"
    },
    {
      "id": "cd42880e-09aa-47e2-b90b-e3b0de3196be",
      "category": "Entertainment",
      "name": "Music Supplies",
      "price": "90.99",
      "sale_price": "54.95",
      "subcategory": "Music"
    },
    {
      "id": "395cb160-de5a-496c-aa65-8d1310c5fbff",
      "category": "Home",
      "name": "Gardening Instrument",
      "price": "136.99",
      "sale_price": "81",
      "subcategory": "Gardening"
    },
    {
      "id": "572ceff0-4682-4466-a60a-862cafd48372",
      "category": "Entertainment",
      "name": "Game Paraphernalia",
      "price": "188.99",
      "sale_price": "150.99",
      "subcategory": "Game"
    },
    {
      "id": "3099bcbe-806a-479c-a7a4-41ce811772dc",
      "category": "Home",
      "name": "Storage Machine",
      "price": "31.95",
      "sale_price": "21.95",
      "subcategory": "Storage"
    },
    {
      "id": "b69a66ff-8a5e-46f6-8d96-99d57258e52c",
      "category": "Automotive",
      "name": "Tire Implement",
      "price": "65.95",
      "sale_price": "39",
      "subcategory": "Tire"
    },
    {
      "id": "ed6c53fa-7605-40bf-96c2-f12b8ecd5c72",
      "category": "Home",
      "name": "Dining Tool",
      "price": "121",
      "sale_price": "108",
      "subcategory": "Dining"
    },
    {
      "id": "00efcd59-4668-4ed1-a2ae-2a04df369802",
      "category": "Home",
      "name": "Storage Tool",
      "price": "28",
      "sale_price": "16.95",
      "subcategory": "Storage"
    },
    {
      "id": "2f7d7eb3-e1ce-427e-956c-bc8fa3b269da",
      "category": "Health",
      "name": "Nutrition Gizmo",
      "price": "185",
      "sale_price": "166.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "79a4d0c5-9b38-4661-b420-6ce58f6d4970",
      "category": "Clothing",
      "name": "Baby Doodad",
      "price": "34.99",
      "sale_price": "30.95",
      "subcategory": "Baby"
    },
    {
      "id": "4683ec41-a8ab-4eaf-8257-9173a91f4e95",
      "category": "Entertainment",
      "name": "Book Whatchamacallit",
      "price": "90.95",
      "sale_price": "81.95",
      "subcategory": "Book"
    },
    {
      "id": "b399d99c-69fe-423b-9d82-4537926f1132",
      "category": "Automotive",
      "name": "Engine Kit",
      "price": "172.99",
      "sale_price": "120.95",
      "subcategory": "Engine"
    },
    {
      "id": "7d64c5ad-0642-4224-a1bb-7af18e856e67",
      "category": "Entertainment",
      "name": "Game Thingamajig",
      "price": "102.99",
      "sale_price": "81.99",
      "subcategory": "Game"
    },
    {
      "id": "27fe7096-a2be-4397-82f4-2c738fbceb65",
      "category": "Home",
      "name": "Gardening Rig",
      "price": "90.99",
      "sale_price": "81",
      "subcategory": "Gardening"
    },
    {
      "id": "93f9fd27-6e5d-4fa8-8e26-73ca031c411f",
      "category": "Activity",
      "name": "Camping Equipment",
      "price": "112.95",
      "sale_price": "67",
      "subcategory": "Camping"
    },
    {
      "id": "8baf1c0b-1d34-4187-94a0-ad3c34737a63",
      "category": "Beauty",
      "name": "Hair Care Component",
      "price": "164",
      "sale_price": "147.99",
      "subcategory": "Hair Care"
    },
    {
      "id": "def62069-a66b-44fc-b02d-62d092f02581",
      "category": "Automotive",
      "name": "Car Thingamajig",
      "price": "23.99",
      "sale_price": "18.95",
      "subcategory": "Car"
    },
    {
      "id": "1cc01e0a-9f40-4d60-b939-0118375b6b42",
      "category": "Health",
      "name": "First Aid Gizmo",
      "price": "129",
      "sale_price": "116",
      "subcategory": "First Aid"
    },
    {
      "id": "63d5925a-9279-4869-90e0-72f3213991cf",
      "category": "Activity",
      "name": "Fitness Mechanism",
      "price": "145",
      "sale_price": "130.99",
      "subcategory": "Fitness"
    },
    {
      "id": "1540dae6-9ff2-4029-bf5f-9ee16d16af32",
      "category": "Electronics",
      "name": "Technology Implement",
      "price": "34.95",
      "sale_price": "27.99",
      "subcategory": "Technology"
    },
    {
      "id": "665447c9-f652-4240-8813-5ed50952c8b3",
      "category": "Activity",
      "name": "Sports Gizmo",
      "price": "71",
      "sale_price": "56.99",
      "subcategory": "Sports"
    },
    {
      "id": "7343b84d-bf6c-431f-9621-c73dd5dac24f",
      "category": "Automotive",
      "name": "Truck Gadget",
      "price": "101.99",
      "sale_price": "80.99",
      "subcategory": "Truck"
    },
    {
      "id": "6490a9d8-0498-4d76-948f-e29333cbe285",
      "category": "Health",
      "name": "Vitamin Implement",
      "price": "18.95",
      "sale_price": "16.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "d6d1cc4b-8cb9-477d-be6b-0572acc5f6e6",
      "category": "Home",
      "name": "Dining Thingamajig",
      "price": "184.95",
      "sale_price": "110",
      "subcategory": "Dining"
    },
    {
      "id": "64863191-2fae-4def-9e4f-d479889ce320",
      "category": "Health",
      "name": "First Aid Instrument",
      "price": "35",
      "sale_price": "21.99",
      "subcategory": "First Aid"
    },
    {
      "id": "9d1268e0-1485-4b83-80f0-c89db491e893",
      "category": "Health",
      "name": "Nutrition Device",
      "price": "23.95",
      "sale_price": "13",
      "subcategory": "Nutrition"
    },
    {
      "id": "a6034cd5-0145-4b67-9781-cb8aa23ae732",
      "category": "Electronics",
      "name": "Phone Kit",
      "price": "67",
      "sale_price": "60.99",
      "subcategory": "Phone"
    },
    {
      "id": "80b8d32e-e082-439e-8c15-f96469079bcb",
      "category": "Electronics",
      "name": "Camera Instrument",
      "price": "55.95",
      "sale_price": "33",
      "subcategory": "Camera"
    },
    {
      "id": "1de1d6b0-4820-4a8a-a54c-ac839914651f",
      "category": "Home",
      "name": "Dining Paraphernalia",
      "price": "185.99",
      "sale_price": "166.95",
      "subcategory": "Dining"
    },
    {
      "id": "83c216d7-e28b-4e4b-a4c5-cf0b20e05798",
      "category": "Automotive",
      "name": "Tire Apparatus",
      "price": "192.95",
      "sale_price": "172.99",
      "subcategory": "Tire"
    },
    {
      "id": "cff0652e-143b-4132-bc9e-e48ccb201c70",
      "category": "Home",
      "name": "Bedding Attachment",
      "price": "101.99",
      "sale_price": "90.95",
      "subcategory": "Bedding"
    },
    {
      "id": "1a384ae9-590a-4ae2-98b1-e80e2373fd05",
      "category": "Electronics",
      "name": "Phone Mechanism",
      "price": "91",
      "sale_price": "63.95",
      "subcategory": "Phone"
    },
    {
      "id": "f9c850fd-6f44-4ab4-94a2-b8b96a980aab",
      "category": "Electronics",
      "name": "Phone Item",
      "price": "73.99",
      "sale_price": "65.99",
      "subcategory": "Phone"
    },
    {
      "id": "9f5b532c-2de3-45b0-80ef-98f1fcba8a53",
      "category": "Health",
      "name": "Nutrition Widget",
      "price": "48.99",
      "sale_price": "33",
      "subcategory": "Nutrition"
    },
    {
      "id": "2a0c77df-ce2d-4e46-9c32-c14e196c5115",
      "category": "Entertainment",
      "name": "Book Kit",
      "price": "91",
      "sale_price": "72",
      "subcategory": "Book"
    },
    {
      "id": "64aa0998-9d01-4724-9fe9-7d9ebf6a14a4",
      "category": "Electronics",
      "name": "Technology Attachment",
      "price": "30",
      "sale_price": "21.95",
      "subcategory": "Technology"
    },
    {
      "id": "591c961b-ac8c-45e6-a4fc-7db5df22ee01",
      "category": "Health",
      "name": "Vitamin Device",
      "price": "119.99",
      "sale_price": "83",
      "subcategory": "Vitamin"
    },
    {
      "id": "8eff5a90-bfe0-44a7-a927-3f8150527244",
      "category": "Activity",
      "name": "Camping Attachment",
      "price": "144",
      "sale_price": "129.99",
      "subcategory": "Camping"
    },
    {
      "id": "88c10acd-e4c9-46e0-8a7e-34844aed4b97",
      "category": "Entertainment",
      "name": "Toy Machine",
      "price": "104.99",
      "sale_price": "62.99",
      "subcategory": "Toy"
    },
    {
      "id": "98c8187b-9c91-4fa0-a422-a2023ffa5e55",
      "category": "Entertainment",
      "name": "Movie Tool",
      "price": "94.95",
      "sale_price": "84.99",
      "subcategory": "Movie"
    },
    {
      "id": "665b7fa5-f9e5-4c4f-bbba-2536fa710a02",
      "category": "Activity",
      "name": "Fitness Apparatus",
      "price": "90.95",
      "sale_price": "54",
      "subcategory": "Fitness"
    },
    {
      "id": "5eeb29cf-e9d0-46cb-a477-f605c432b26f",
      "category": "Entertainment",
      "name": "Game Kit",
      "price": "147.99",
      "sale_price": "117",
      "subcategory": "Game"
    },
    {
      "id": "6cc19a3c-04ba-4513-b883-71d398305c6a",
      "category": "Automotive",
      "name": "Tire Device",
      "price": "163.95",
      "sale_price": "146.95",
      "subcategory": "Tire"
    },
    {
      "id": "9fc0a619-d0f5-4dc7-b2a4-bb36fa3fa899",
      "category": "Home",
      "name": "Kitchen Doodad",
      "price": "126.99",
      "sale_price": "113.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "e0ce5e4e-02b2-4397-be3a-8283adff21d3",
      "category": "Activity",
      "name": "Swimming Widget",
      "price": "44",
      "sale_price": "35",
      "subcategory": "Swimming"
    },
    {
      "id": "e1585b6c-97e5-474a-8e85-fec192fff4b1",
      "category": "Activity",
      "name": "Biking Whatchamacallit",
      "price": "18.99",
      "sale_price": "14.95",
      "subcategory": "Biking"
    },
    {
      "id": "ec4f460e-3f19-4954-b7ba-5f34026f50da",
      "category": "Activity",
      "name": "Camping Device",
      "price": "166.99",
      "sale_price": "149.99",
      "subcategory": "Camping"
    },
    {
      "id": "0882c7e4-91d8-4d0f-93a2-88b1a460878f",
      "category": "Beauty",
      "name": "Bath Attachment",
      "price": "11.95",
      "sale_price": "9.95",
      "subcategory": "Bath"
    },
    {
      "id": "7f5d7c7b-3541-4a48-89fb-dc7be5b69d12",
      "category": "Electronics",
      "name": "Phone Instrument",
      "price": "196.99",
      "sale_price": "176",
      "subcategory": "Phone"
    },
    {
      "id": "28dce55a-be79-496e-8d31-f885f108f7e3",
      "category": "Activity",
      "name": "Swimming Machine",
      "price": "105.95",
      "sale_price": "73.99",
      "subcategory": "Swimming"
    },
    {
      "id": "bb9e256f-61c0-44f5-818c-666671413337",
      "category": "Clothing",
      "name": "Baby Apparatus",
      "price": "145.95",
      "sale_price": "130.99",
      "subcategory": "Baby"
    },
    {
      "id": "f28899e6-85cd-47a1-baf7-425fb67a6a07",
      "category": "Entertainment",
      "name": "Toy Paraphernalia",
      "price": "185.95",
      "sale_price": "129.99",
      "subcategory": "Toy"
    },
    {
      "id": "57b8e22d-1943-4a57-87e3-40b663566f22",
      "category": "Beauty",
      "name": "Skin Care Gear",
      "price": "34",
      "sale_price": "27.99",
      "subcategory": "Skin Care"
    },
    {
      "id": "6f20e9ad-5b34-4d3d-9fe2-ee741c769450",
      "category": "Activity",
      "name": "Outdoors Item",
      "price": "31.95",
      "sale_price": "27.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "38c24979-7004-4b53-9e7f-98e7749689d1",
      "category": "Home",
      "name": "Cleaning Equipment",
      "price": "153.95",
      "sale_price": "122.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "a2c374b1-690d-46bb-b4a1-678b36f641f4",
      "category": "Beauty",
      "name": "Bath Thingamajig",
      "price": "31.99",
      "sale_price": "27.95",
      "subcategory": "Bath"
    },
    {
      "id": "77f621b5-1a9d-4c7a-9456-1124eeecc3e9",
      "category": "Pets",
      "name": "Cat Widget",
      "price": "60.99",
      "sale_price": "36",
      "subcategory": "Cat"
    },
    {
      "id": "dbbe0e06-dd21-4110-8807-07688e13c4b9",
      "category": "Clothing",
      "name": "Womens Widget",
      "price": "168.95",
      "sale_price": "117.95",
      "subcategory": "Womens"
    },
    {
      "id": "a9c6c0cf-7489-4556-b9a9-9730e3944b3a",
      "category": "Pets",
      "name": "Dog Apparatus",
      "price": "152.99",
      "sale_price": "121.95",
      "subcategory": "Dog"
    },
    {
      "id": "c16f3b26-f0e8-40d4-9e83-37f44a37f767",
      "category": "Clothing",
      "name": "Kids Gear",
      "price": "166",
      "sale_price": "149",
      "subcategory": "Kids"
    },
    {
      "id": "3ddb4e2c-d648-4ad8-ac84-f7c81577cf52",
      "category": "Activity",
      "name": "Sports Contraption",
      "price": "157.95",
      "sale_price": "125",
      "subcategory": "Sports"
    },
    {
      "id": "0b36a1ce-cba2-41e9-adca-1126b91993ca",
      "category": "Activity",
      "name": "Beach Gear",
      "price": "196.95",
      "sale_price": "176",
      "subcategory": "Beach"
    },
    {
      "id": "47fa0b2e-0b38-4f79-b77a-22526f972157",
      "category": "Home",
      "name": "Dining Tool",
      "price": "166",
      "sale_price": "149.99",
      "subcategory": "Dining"
    },
    {
      "id": "12393a39-3f69-42f3-8209-449f41ae8a9f",
      "category": "Home",
      "name": "Furniture Instrument",
      "price": "189",
      "sale_price": "113.99",
      "subcategory": "Furniture"
    },
    {
      "id": "0a1afbf6-0e70-4683-b0ef-6b1d61b19014",
      "category": "Beauty",
      "name": "Personal Tool",
      "price": "33.99",
      "sale_price": "23",
      "subcategory": "Personal"
    },
    {
      "id": "192eaa4b-f765-4e31-9ced-5e9a3adbe5e0",
      "category": "Activity",
      "name": "Outdoors Apparatus",
      "price": "22.95",
      "sale_price": "17.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "145e8d85-e61d-4776-a354-85d64f88cf5d",
      "category": "Health",
      "name": "Vitamin Item",
      "price": "35.99",
      "sale_price": "21.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "9dff25f5-2775-42c5-a081-4a091c7ceb1c",
      "category": "Entertainment",
      "name": "Book Instrument",
      "price": "190.99",
      "sale_price": "114.99",
      "subcategory": "Book"
    },
    {
      "id": "761c7657-74af-494a-8b75-28d5a2c5ddc8",
      "category": "Clothing",
      "name": "Jewelry Device",
      "price": "158.99",
      "sale_price": "94.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "2e7d7702-2ce3-4379-aaf2-f65bd19bab4f",
      "category": "Clothing",
      "name": "Baby Gadget",
      "price": "100.99",
      "sale_price": "90",
      "subcategory": "Baby"
    },
    {
      "id": "e4692e56-0755-4ab6-94e9-3c1580403542",
      "category": "Home",
      "name": "Cooking Apparatus",
      "price": "166.95",
      "sale_price": "116.95",
      "subcategory": "Cooking"
    },
    {
      "id": "9374a714-e396-4129-be14-8108e3510146",
      "category": "Beauty",
      "name": "Skin Care Kit",
      "price": "42.99",
      "sale_price": "29.95",
      "subcategory": "Skin Care"
    },
    {
      "id": "e5f93e39-ca3b-416c-8851-6547f3482c44",
      "category": "Entertainment",
      "name": "Party Tool",
      "price": "96.99",
      "sale_price": "57",
      "subcategory": "Party"
    },
    {
      "id": "b1b2710a-e2a5-41a8-ac2b-9cf8b89e8862",
      "category": "Health",
      "name": "Medicine Whatchamacallit",
      "price": "159",
      "sale_price": "143.95",
      "subcategory": "Medicine"
    },
    {
      "id": "b5323d98-825e-4d29-b4d8-2fdccb155bed",
      "category": "Electronics",
      "name": "Phone Device",
      "price": "70",
      "sale_price": "42.95",
      "subcategory": "Phone"
    },
    {
      "id": "beaad88c-3733-4d9f-95a4-7781a07634aa",
      "category": "Automotive",
      "name": "Truck Kit",
      "price": "148.99",
      "sale_price": "118",
      "subcategory": "Truck"
    },
    {
      "id": "a9705f86-a05d-45df-b1a0-c7603ebd8896",
      "category": "Health",
      "name": "Medicine Item",
      "price": "185",
      "sale_price": "166.95",
      "subcategory": "Medicine"
    },
    {
      "id": "f809f1bd-9dff-4de0-82f9-84005990f01d",
      "category": "Home",
      "name": "Bedding Gadget",
      "price": "64",
      "sale_price": "44.95",
      "subcategory": "Bedding"
    },
    {
      "id": "2be5a51d-1f48-4b38-98ee-d68121cc23b0",
      "category": "Activity",
      "name": "Sports Rig",
      "price": "38",
      "sale_price": "30",
      "subcategory": "Sports"
    },
    {
      "id": "e98f892d-2443-430a-aa3e-f6dad8c8c593",
      "category": "Automotive",
      "name": "Car Mechanism",
      "price": "157.95",
      "sale_price": "125.95",
      "subcategory": "Car"
    },
    {
      "id": "a9f454ed-0d4e-4289-afb8-4602dad2dc34",
      "category": "Entertainment",
      "name": "Party Instrument",
      "price": "147",
      "sale_price": "117.99",
      "subcategory": "Party"
    },
    {
      "id": "0c7c9ba8-efa9-4465-a4e2-984f80e973b8",
      "category": "Home",
      "name": "Home Improvement Paraphernalia",
      "price": "130.95",
      "sale_price": "91.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "3130a4b5-b8e6-4dc2-a961-d60d2971c612",
      "category": "Clothing",
      "name": "Kids Item",
      "price": "45.99",
      "sale_price": "36",
      "subcategory": "Kids"
    },
    {
      "id": "2b5e7c54-a334-490a-9c9c-ae562f74ece7",
      "category": "Automotive",
      "name": "Tire Gadget",
      "price": "197",
      "sale_price": "157",
      "subcategory": "Tire"
    },
    {
      "id": "a90c01e7-d425-4e53-a316-9d628266188e",
      "category": "Electronics",
      "name": "Camera Kit",
      "price": "176.99",
      "sale_price": "158.95",
      "subcategory": "Camera"
    },
    {
      "id": "656bd0ca-cf80-49be-a7b7-76b8bb5452ee",
      "category": "Activity",
      "name": "Swimming Instrument",
      "price": "45.99",
      "sale_price": "27.95",
      "subcategory": "Swimming"
    },
    {
      "id": "4941309b-0b87-4ab3-8c1b-bffbdeb2b31c",
      "category": "Entertainment",
      "name": "Toy Kit",
      "price": "135.95",
      "sale_price": "81.95",
      "subcategory": "Toy"
    },
    {
      "id": "6e9d5a8f-57dc-4bab-bcb0-221c85e1296a",
      "category": "Beauty",
      "name": "Bath Attachment",
      "price": "121.99",
      "sale_price": "108.99",
      "subcategory": "Bath"
    },
    {
      "id": "c196a91d-faeb-42e6-89c3-ca8da897ca82",
      "category": "Entertainment",
      "name": "Book Tool",
      "price": "167.99",
      "sale_price": "150.99",
      "subcategory": "Book"
    },
    {
      "id": "e96f71c0-1483-49f8-b55e-5a850ac241af",
      "category": "Health",
      "name": "Vitamin Supplies",
      "price": "19.99",
      "sale_price": "11.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "7b53428e-ef9e-43a3-9285-a1efac1e315f",
      "category": "Home",
      "name": "Kitchen Accessory",
      "price": "132",
      "sale_price": "118.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "d38d5e83-a1d8-47c6-bf95-0d585b75a3aa",
      "category": "Beauty",
      "name": "Makeup Implement",
      "price": "27.95",
      "sale_price": "24.95",
      "subcategory": "Makeup"
    },
    {
      "id": "bbd59a1b-f780-4ae6-a0f4-7296391f097b",
      "category": "Clothing",
      "name": "Mens Accessory",
      "price": "111.95",
      "sale_price": "88",
      "subcategory": "Mens"
    },
    {
      "id": "fd8c8960-4095-42b9-985a-bcaefe89ff90",
      "category": "Entertainment",
      "name": "Game Gadget",
      "price": "103.95",
      "sale_price": "61.95",
      "subcategory": "Game"
    },
    {
      "id": "6596ecd7-9222-4e7e-9d46-894471df1ba5",
      "category": "Pets",
      "name": "Dog Apparatus",
      "price": "163.95",
      "sale_price": "146.95",
      "subcategory": "Dog"
    },
    {
      "id": "ec1733b9-1d81-4899-844b-e891b4eeb582",
      "category": "Automotive",
      "name": "Engine Supplies",
      "price": "80.99",
      "sale_price": "72.95",
      "subcategory": "Engine"
    },
    {
      "id": "0b2ac63a-8dd7-41b4-831f-f2a03dfbf836",
      "category": "Clothing",
      "name": "Baby Attachment",
      "price": "40.95",
      "sale_price": "32.99",
      "subcategory": "Baby"
    },
    {
      "id": "cbf67d76-1a67-4c17-8249-935fe2e3ebf9",
      "category": "Clothing",
      "name": "Kids Paraphernalia",
      "price": "142",
      "sale_price": "99.95",
      "subcategory": "Kids"
    },
    {
      "id": "51d7ee7c-367a-43f7-ac3c-a0bdc32cc09c",
      "category": "Activity",
      "name": "Sports Mechanism",
      "price": "152.95",
      "sale_price": "91.95",
      "subcategory": "Sports"
    },
    {
      "id": "bbf27520-2450-44fb-bcdb-2490228c03b1",
      "category": "Home",
      "name": "Gardening Widget",
      "price": "43",
      "sale_price": "34",
      "subcategory": "Gardening"
    },
    {
      "id": "1a3dfe84-7433-406b-9c6a-41608c6ed3bf",
      "category": "Home",
      "name": "Cooking Mechanism",
      "price": "157",
      "sale_price": "94.99",
      "subcategory": "Cooking"
    },
    {
      "id": "31f727c7-84be-4c43-9c69-fa11467e2935",
      "category": "Activity",
      "name": "Sports Rig",
      "price": "171",
      "sale_price": "153",
      "subcategory": "Sports"
    },
    {
      "id": "87e8baeb-ab02-43cd-bedd-ba391903d1c9",
      "category": "Beauty",
      "name": "Skin Care Contraption",
      "price": "187.99",
      "sale_price": "130",
      "subcategory": "Skin Care"
    },
    {
      "id": "b02fbab9-4783-4d23-959a-32397857e2ea",
      "category": "Automotive",
      "name": "Engine Thingamajig",
      "price": "167.95",
      "sale_price": "150",
      "subcategory": "Engine"
    },
    {
      "id": "c6cc7b05-ccfd-41b7-95e6-34802fb056f8",
      "category": "Activity",
      "name": "Biking Mechanism",
      "price": "37.99",
      "sale_price": "22.95",
      "subcategory": "Biking"
    },
    {
      "id": "78090606-987d-40e5-8c42-8440febcaffc",
      "category": "Home",
      "name": "Bedding Paraphernalia",
      "price": "187",
      "sale_price": "112",
      "subcategory": "Bedding"
    },
    {
      "id": "b2086344-97f6-4bf2-a9e0-797cbfd681a9",
      "category": "Home",
      "name": "Gardening Whatchamacallit",
      "price": "20.95",
      "sale_price": "16.95",
      "subcategory": "Gardening"
    },
    {
      "id": "26bb46ba-8c0f-4ad9-8f5d-2f6c031b07b5",
      "category": "Health",
      "name": "Nutrition Mechanism",
      "price": "114.99",
      "sale_price": "91",
      "subcategory": "Nutrition"
    },
    {
      "id": "fc237963-fbd3-448a-ae2d-7602f775b5fd",
      "category": "Clothing",
      "name": "Kids Tool",
      "price": "97.99",
      "sale_price": "58.95",
      "subcategory": "Kids"
    },
    {
      "id": "04d08652-0c2a-4b0b-a835-98eb88c727d2",
      "category": "Clothing",
      "name": "Kids Paraphernalia",
      "price": "126",
      "sale_price": "100.95",
      "subcategory": "Kids"
    },
    {
      "id": "9acdc99e-b750-4bae-a4bd-efad2a447a19",
      "category": "Pets",
      "name": "Dog Kit",
      "price": "142.99",
      "sale_price": "113",
      "subcategory": "Dog"
    },
    {
      "id": "69dd7184-b1b9-40c2-bf4e-fc8629ced7a6",
      "category": "Home",
      "name": "Cooking Tool",
      "price": "21",
      "sale_price": "18.99",
      "subcategory": "Cooking"
    },
    {
      "id": "b4e70ea5-bbc7-485d-99d4-09e8036e0733",
      "category": "Pets",
      "name": "Cat Gizmo",
      "price": "137.99",
      "sale_price": "95.99",
      "subcategory": "Cat"
    },
    {
      "id": "842b827a-1aab-4448-937e-93e56d8afadf",
      "category": "Electronics",
      "name": "Camera Widget",
      "price": "12.95",
      "sale_price": "7.99",
      "subcategory": "Camera"
    },
    {
      "id": "7ea62dfb-e764-44b1-9d17-7e49fec7097d",
      "category": "Home",
      "name": "Bedding Tool",
      "price": "143.95",
      "sale_price": "128.99",
      "subcategory": "Bedding"
    },
    {
      "id": "bc796103-b969-45d2-88fa-1ac487d13c00",
      "category": "Health",
      "name": "Medicine Implement",
      "price": "145",
      "sale_price": "130.99",
      "subcategory": "Medicine"
    },
    {
      "id": "e2f5ee7d-7f2e-4d19-aff1-3344f9699723",
      "category": "Automotive",
      "name": "Car Gear",
      "price": "101.99",
      "sale_price": "70",
      "subcategory": "Car"
    },
    {
      "id": "a0c9ccc5-5a1d-4813-b914-a0f65ab16fc1",
      "category": "Electronics",
      "name": "Camera Thingamajig",
      "price": "131.99",
      "sale_price": "104.95",
      "subcategory": "Camera"
    },
    {
      "id": "85676c6c-a2e3-4ad0-8461-82f6f97e2568",
      "category": "Beauty",
      "name": "Makeup Instrument",
      "price": "102",
      "sale_price": "61.95",
      "subcategory": "Makeup"
    },
    {
      "id": "39182fd8-20c1-4465-9ec6-ad32e821e03a",
      "category": "Beauty",
      "name": "Personal Rig",
      "price": "137.95",
      "sale_price": "95.95",
      "subcategory": "Personal"
    },
    {
      "id": "fc1fff7b-8d54-45be-9259-b796eb5cb690",
      "category": "Clothing",
      "name": "Kids Instrument",
      "price": "131",
      "sale_price": "117",
      "subcategory": "Kids"
    },
    {
      "id": "0138e770-d1ce-4b88-babb-7ac0ba950913",
      "category": "Home",
      "name": "Dining Supplies",
      "price": "115.99",
      "sale_price": "69.95",
      "subcategory": "Dining"
    },
    {
      "id": "c12c97a3-f2f9-4a65-bd31-aaaac096e97a",
      "category": "Entertainment",
      "name": "Book Widget",
      "price": "119.95",
      "sale_price": "107.99",
      "subcategory": "Book"
    },
    {
      "id": "ad9b288c-e505-45f5-8b45-6dfa8e8587fa",
      "category": "Health",
      "name": "Nutrition Gadget",
      "price": "103",
      "sale_price": "61",
      "subcategory": "Nutrition"
    },
    {
      "id": "f59024c7-0352-4c3b-b253-467e13fde94b",
      "category": "Clothing",
      "name": "Mens Item",
      "price": "94.95",
      "sale_price": "75",
      "subcategory": "Mens"
    },
    {
      "id": "e0687855-d823-499f-b1cd-aaf9a4ecbbed",
      "category": "Beauty",
      "name": "Bath Gadget",
      "price": "92.95",
      "sale_price": "55",
      "subcategory": "Bath"
    },
    {
      "id": "df1ef2ab-1502-46d5-9839-c4030a6f2504",
      "category": "Activity",
      "name": "Biking Device",
      "price": "179",
      "sale_price": "161.95",
      "subcategory": "Biking"
    },
    {
      "id": "61524bef-783e-4954-8be4-4a75258ca270",
      "category": "Home",
      "name": "Bedding Thingamajig",
      "price": "90",
      "sale_price": "62.99",
      "subcategory": "Bedding"
    },
    {
      "id": "dcc87d53-dd2f-4784-a6e9-e48f337f9d9a",
      "category": "Health",
      "name": "Nutrition Implement",
      "price": "60.95",
      "sale_price": "48.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "66ff71b4-6ec3-408b-a115-530b157d5ed6",
      "category": "Pets",
      "name": "Dog Gizmo",
      "price": "30",
      "sale_price": "18.99",
      "subcategory": "Dog"
    },
    {
      "id": "71d9a8bf-2503-43ea-b829-dc0b3581a786",
      "category": "Entertainment",
      "name": "Toy Gear",
      "price": "131.99",
      "sale_price": "117.99",
      "subcategory": "Toy"
    },
    {
      "id": "4c342cf8-8537-45b2-a929-47941f6a2095",
      "category": "Activity",
      "name": "Sports Implement",
      "price": "64",
      "sale_price": "44.99",
      "subcategory": "Sports"
    },
    {
      "id": "c7f5aad7-6aaa-4834-ad57-ee70703f68bc",
      "category": "Electronics",
      "name": "Camera Supplies",
      "price": "135.95",
      "sale_price": "121",
      "subcategory": "Camera"
    },
    {
      "id": "44d9a8b6-64e0-43dc-8787-5d7d75cd16f1",
      "category": "Entertainment",
      "name": "Book Paraphernalia",
      "price": "45.99",
      "sale_price": "31.99",
      "subcategory": "Book"
    },
    {
      "id": "dd9e0ab4-89d2-4abe-864e-0c7c80eb1c7d",
      "category": "Pets",
      "name": "Cat Widget",
      "price": "50.99",
      "sale_price": "40.95",
      "subcategory": "Cat"
    },
    {
      "id": "b4d88168-39d1-47a9-b643-8577e6bc97cf",
      "category": "Entertainment",
      "name": "Game Supplies",
      "price": "177.95",
      "sale_price": "159.95",
      "subcategory": "Game"
    },
    {
      "id": "49cab02f-e685-43cb-85c6-e8a2152feb10",
      "category": "Entertainment",
      "name": "Game Doodad",
      "price": "101.99",
      "sale_price": "70.99",
      "subcategory": "Game"
    },
    {
      "id": "3b7af20e-63cf-447f-9d8a-5182e4ebb6d8",
      "category": "Home",
      "name": "Furniture Apparatus",
      "price": "38.95",
      "sale_price": "34",
      "subcategory": "Furniture"
    },
    {
      "id": "eba7a8b3-c0ec-4e0b-9416-446e84a9ac23",
      "category": "Electronics",
      "name": "Computer Equipment",
      "price": "141.95",
      "sale_price": "98.99",
      "subcategory": "Computer"
    },
    {
      "id": "9363f438-b8b7-4a09-b6af-1a5414a08f0e",
      "category": "Home",
      "name": "Cooking Whatchamacallit",
      "price": "125.99",
      "sale_price": "112",
      "subcategory": "Cooking"
    },
    {
      "id": "c7cfd334-cf14-4c8e-a54b-3e639a70b6be",
      "category": "Activity",
      "name": "Camping Thingamajig",
      "price": "147.95",
      "sale_price": "117.99",
      "subcategory": "Camping"
    },
    {
      "id": "19e8afc7-7998-4e69-878c-e06cadecdcf6",
      "category": "Activity",
      "name": "Fitness Mechanism",
      "price": "101",
      "sale_price": "70",
      "subcategory": "Fitness"
    },
    {
      "id": "6dc4cf31-5d13-4f87-8bae-2aa106b9e942",
      "category": "Entertainment",
      "name": "Party Contraption",
      "price": "150.95",
      "sale_price": "105.95",
      "subcategory": "Party"
    },
    {
      "id": "b515b107-d6b6-41b0-9095-8ea10c5a7f74",
      "category": "Activity",
      "name": "Biking Paraphernalia",
      "price": "109",
      "sale_price": "65",
      "subcategory": "Biking"
    },
    {
      "id": "cacbbd32-9841-49d4-b8d6-c7db41ed8281",
      "category": "Clothing",
      "name": "Baby Gear",
      "price": "46",
      "sale_price": "36.99",
      "subcategory": "Baby"
    },
    {
      "id": "85ecfbdd-8a44-4436-83ee-cc92c1059dd0",
      "category": "Home",
      "name": "Cleaning Accessory",
      "price": "142.95",
      "sale_price": "127",
      "subcategory": "Cleaning"
    },
    {
      "id": "1fdeb56f-02f1-43da-9ebc-383b45fea068",
      "category": "Beauty",
      "name": "Makeup Machine",
      "price": "14.99",
      "sale_price": "9.99",
      "subcategory": "Makeup"
    },
    {
      "id": "052bb02d-b7cc-446b-be5b-65001e3be67b",
      "category": "Beauty",
      "name": "Makeup Rig",
      "price": "59.99",
      "sale_price": "35.99",
      "subcategory": "Makeup"
    },
    {
      "id": "b38b5f2e-43e5-42f3-bc49-7d78a450f127",
      "category": "Entertainment",
      "name": "Party Widget",
      "price": "97.99",
      "sale_price": "58.95",
      "subcategory": "Party"
    },
    {
      "id": "fd7e5073-d6d3-4de2-9da5-b31f9dc017cc",
      "category": "Health",
      "name": "Nutrition Attachment",
      "price": "24.99",
      "sale_price": "21.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "14559ffc-a67a-456f-af53-edb1dc1cf150",
      "category": "Activity",
      "name": "Camping Mechanism",
      "price": "72.95",
      "sale_price": "64.99",
      "subcategory": "Camping"
    },
    {
      "id": "cd47ba96-70c2-482a-a37c-8b6e1b97c120",
      "category": "Entertainment",
      "name": "Movie Supplies",
      "price": "158.99",
      "sale_price": "110.99",
      "subcategory": "Movie"
    },
    {
      "id": "9d0a3504-4d0a-4570-b5d7-14a22f799ba0",
      "category": "Health",
      "name": "Nutrition Tool",
      "price": "105",
      "sale_price": "84",
      "subcategory": "Nutrition"
    },
    {
      "id": "8fd31fe3-5621-465c-a16f-0bb66bee9e9b",
      "category": "Beauty",
      "name": "Makeup Doodad",
      "price": "100.99",
      "sale_price": "80",
      "subcategory": "Makeup"
    },
    {
      "id": "93271879-c95d-4bba-a698-00586cf353e6",
      "category": "Beauty",
      "name": "Bath Contraption",
      "price": "92",
      "sale_price": "55",
      "subcategory": "Bath"
    },
    {
      "id": "91acf8ab-4e2a-42af-9d93-2d03fbf7a731",
      "category": "Health",
      "name": "Medicine Tool",
      "price": "166.95",
      "sale_price": "149",
      "subcategory": "Medicine"
    },
    {
      "id": "1ffc992e-9014-413e-9c33-5fedc648daea",
      "category": "Clothing",
      "name": "Kids Contraption",
      "price": "190.95",
      "sale_price": "133",
      "subcategory": "Kids"
    },
    {
      "id": "9ba1ec96-eb8d-4ab0-bfc3-1f238e5c9442",
      "category": "Entertainment",
      "name": "Movie Machine",
      "price": "167.95",
      "sale_price": "100.99",
      "subcategory": "Movie"
    },
    {
      "id": "ab02a20e-8418-4381-8df8-f35f47283843",
      "category": "Activity",
      "name": "Camping Machine",
      "price": "10",
      "sale_price": "6",
      "subcategory": "Camping"
    },
    {
      "id": "0ee7acb5-4561-473c-8ad2-1093c3e6e236",
      "category": "Activity",
      "name": "Camping Contraption",
      "price": "140.99",
      "sale_price": "98.99",
      "subcategory": "Camping"
    },
    {
      "id": "0cddd12e-191e-4ad4-9a9a-25bc1747a4ad",
      "category": "Activity",
      "name": "Biking Component",
      "price": "124.95",
      "sale_price": "99.99",
      "subcategory": "Biking"
    },
    {
      "id": "43d2b5eb-61ce-46af-b5e2-42e4296c34de",
      "category": "Electronics",
      "name": "Camera Item",
      "price": "146",
      "sale_price": "116.95",
      "subcategory": "Camera"
    },
    {
      "id": "7d3dda49-5653-489c-b9bd-48483f253bb3",
      "category": "Home",
      "name": "Kitchen Gadget",
      "price": "41",
      "sale_price": "32",
      "subcategory": "Kitchen"
    },
    {
      "id": "27b45c58-2bfc-49c9-99fd-9efe6298e951",
      "category": "Activity",
      "name": "Outdoors Attachment",
      "price": "87.99",
      "sale_price": "78",
      "subcategory": "Outdoors"
    },
    {
      "id": "7f7e811b-fb56-4610-b101-b6b03faa4591",
      "category": "Pets",
      "name": "Dog Implement",
      "price": "84.95",
      "sale_price": "67.99",
      "subcategory": "Dog"
    },
    {
      "id": "ec7463d2-c8e5-4018-97bc-eaad1d21bb94",
      "category": "Activity",
      "name": "Camping Kit",
      "price": "127",
      "sale_price": "76.99",
      "subcategory": "Camping"
    },
    {
      "id": "3dbab963-e2fe-41ab-b58d-d24e7a9f70a0",
      "category": "Beauty",
      "name": "Personal Supplies",
      "price": "54.95",
      "sale_price": "48.99",
      "subcategory": "Personal"
    },
    {
      "id": "e5c30837-4350-4cd0-84ea-d41de339ac26",
      "category": "Automotive",
      "name": "Car Contraption",
      "price": "167",
      "sale_price": "150",
      "subcategory": "Car"
    },
    {
      "id": "5bd37ee3-e6f4-40b9-97f9-4dc63701b461",
      "category": "Entertainment",
      "name": "Music Gear",
      "price": "84.99",
      "sale_price": "67",
      "subcategory": "Music"
    },
    {
      "id": "c17d48ea-d9f6-4341-8689-6559c7ff26c8",
      "category": "Health",
      "name": "Vitamin Whatchamacallit",
      "price": "99",
      "sale_price": "69.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "f00930f1-ed42-4155-b5ff-f448fc1d4747",
      "category": "Home",
      "name": "Gardening Machine",
      "price": "107.95",
      "sale_price": "96",
      "subcategory": "Gardening"
    },
    {
      "id": "0d02b1a7-c66e-47fd-9fe4-d623eeaaf97e",
      "category": "Health",
      "name": "First Aid Gadget",
      "price": "178.99",
      "sale_price": "106.99",
      "subcategory": "First Aid"
    },
    {
      "id": "96fc7a7d-d247-4021-9eef-9127a0059750",
      "category": "Home",
      "name": "Cleaning Thingamajig",
      "price": "89",
      "sale_price": "80.95",
      "subcategory": "Cleaning"
    },
    {
      "id": "fbb494d8-1631-4e9d-86e2-107e53106a67",
      "category": "Home",
      "name": "Furniture Widget",
      "price": "116.99",
      "sale_price": "104.95",
      "subcategory": "Furniture"
    },
    {
      "id": "48bc6858-ae3a-4629-8898-f5d197383914",
      "category": "Pets",
      "name": "Aquarium Doodad",
      "price": "143",
      "sale_price": "85.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "1d67ac70-15fc-4101-a893-2a396113de4b",
      "category": "Electronics",
      "name": "Technology Contraption",
      "price": "14.99",
      "sale_price": "8.95",
      "subcategory": "Technology"
    },
    {
      "id": "3ddfc9ec-c667-45f6-b3ab-9193b7888052",
      "category": "Home",
      "name": "Home Improvement Device",
      "price": "75.99",
      "sale_price": "67.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "70591e32-8418-45e5-943c-74d3b6d3ffc8",
      "category": "Entertainment",
      "name": "Game Gizmo",
      "price": "176.99",
      "sale_price": "158.95",
      "subcategory": "Game"
    },
    {
      "id": "c1b9eb4f-bffc-4872-9f4d-32a78c3b8010",
      "category": "Home",
      "name": "Cleaning Tool",
      "price": "83.99",
      "sale_price": "66.95",
      "subcategory": "Cleaning"
    },
    {
      "id": "34d7d111-f785-458a-88dc-6bdfacae521c",
      "category": "Home",
      "name": "Bedding Attachment",
      "price": "136",
      "sale_price": "108.95",
      "subcategory": "Bedding"
    },
    {
      "id": "36f126b6-a5ce-4eab-9460-c7686f284e20",
      "category": "Beauty",
      "name": "Skin Care Whatchamacallit",
      "price": "29",
      "sale_price": "26.99",
      "subcategory": "Skin Care"
    },
    {
      "id": "ce4cfa18-fa90-47d6-84a0-f37d6a541074",
      "category": "Automotive",
      "name": "Engine Device",
      "price": "123.95",
      "sale_price": "86.95",
      "subcategory": "Engine"
    },
    {
      "id": "1f6ad2ea-2b15-4c06-a74a-741eeebf5b54",
      "category": "Home",
      "name": "Storage Equipment",
      "price": "146.95",
      "sale_price": "87.95",
      "subcategory": "Storage"
    },
    {
      "id": "d71dc99f-ef80-4845-89d7-49077bf289fc",
      "category": "Home",
      "name": "Home Improvement Thingamajig",
      "price": "126.99",
      "sale_price": "100.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "fd19a6c1-cf51-45bc-a731-2cecf4badaa8",
      "category": "Home",
      "name": "Gardening Contraption",
      "price": "71",
      "sale_price": "49",
      "subcategory": "Gardening"
    },
    {
      "id": "69a317a8-5c81-4589-9d8b-8f2ea40179d2",
      "category": "Automotive",
      "name": "Engine Device",
      "price": "23.99",
      "sale_price": "16.95",
      "subcategory": "Engine"
    },
    {
      "id": "d5db60ff-9158-4084-a455-dd4bfc9af89e",
      "category": "Automotive",
      "name": "Tire Widget",
      "price": "165.99",
      "sale_price": "148.95",
      "subcategory": "Tire"
    },
    {
      "id": "8bb0ec92-4121-481a-abb1-cb7446279005",
      "category": "Home",
      "name": "Storage Item",
      "price": "81.99",
      "sale_price": "48",
      "subcategory": "Storage"
    },
    {
      "id": "c066bda4-855f-4fc6-9c70-c4deed26aa97",
      "category": "Home",
      "name": "Home Improvement Gear",
      "price": "96",
      "sale_price": "86.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "c2700d86-4655-4f73-a1a9-86c01344cbd1",
      "category": "Activity",
      "name": "Beach Mechanism",
      "price": "90",
      "sale_price": "72",
      "subcategory": "Beach"
    },
    {
      "id": "45c878cd-84c6-4b71-9cbb-629f8afb0dd1",
      "category": "Clothing",
      "name": "Jewelry Gizmo",
      "price": "184",
      "sale_price": "165.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "d5a5636b-2429-42b6-8fe9-6e3f8c7ac148",
      "category": "Automotive",
      "name": "Car Doodad",
      "price": "178.99",
      "sale_price": "160.95",
      "subcategory": "Car"
    },
    {
      "id": "76cdc986-7e23-4281-9aa6-40f8ff71f4e6",
      "category": "Pets",
      "name": "Dog Doodad",
      "price": "168.95",
      "sale_price": "134",
      "subcategory": "Dog"
    },
    {
      "id": "9144371c-4f1c-40ea-af9c-550a60ce8222",
      "category": "Entertainment",
      "name": "Music Device",
      "price": "158.95",
      "sale_price": "110",
      "subcategory": "Music"
    },
    {
      "id": "1cc48d99-8681-485d-b433-849ab8abc5f0",
      "category": "Entertainment",
      "name": "Toy Gizmo",
      "price": "74.99",
      "sale_price": "44",
      "subcategory": "Toy"
    },
    {
      "id": "39809c51-12e2-458f-a95e-209d74a625cf",
      "category": "Automotive",
      "name": "Car Rig",
      "price": "26",
      "sale_price": "18",
      "subcategory": "Car"
    },
    {
      "id": "d3314383-620e-46a1-8814-c6fe21716182",
      "category": "Automotive",
      "name": "Tire Contraption",
      "price": "62",
      "sale_price": "49",
      "subcategory": "Tire"
    },
    {
      "id": "651df17d-9456-4796-9e66-f3736e601aec",
      "category": "Clothing",
      "name": "Jewelry Accessory",
      "price": "26",
      "sale_price": "18.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "91f6447d-861c-439d-945d-37b721005b86",
      "category": "Entertainment",
      "name": "Music Item",
      "price": "98.95",
      "sale_price": "68.99",
      "subcategory": "Music"
    },
    {
      "id": "ec07c707-4ccd-4e59-8f5b-c184789016d1",
      "category": "Automotive",
      "name": "Car Kit",
      "price": "61.99",
      "sale_price": "54.99",
      "subcategory": "Car"
    },
    {
      "id": "d5ad690f-25b8-420b-ba31-334f96ddb635",
      "category": "Electronics",
      "name": "Technology Thingamajig",
      "price": "84.95",
      "sale_price": "58.99",
      "subcategory": "Technology"
    },
    {
      "id": "df10776e-9c59-4c55-8af5-c1a538b67921",
      "category": "Automotive",
      "name": "Truck Apparatus",
      "price": "114.95",
      "sale_price": "91.99",
      "subcategory": "Truck"
    },
    {
      "id": "c8deccb0-dbec-4914-8db5-676bf08797d4",
      "category": "Beauty",
      "name": "Personal Supplies",
      "price": "147.99",
      "sale_price": "88.95",
      "subcategory": "Personal"
    },
    {
      "id": "113e312e-7d1f-420f-945e-11f0fa498d5b",
      "category": "Entertainment",
      "name": "Party Implement",
      "price": "30.95",
      "sale_price": "27.95",
      "subcategory": "Party"
    },
    {
      "id": "fd891162-f394-44f9-bfd3-7cc955a7ce08",
      "category": "Beauty",
      "name": "Makeup Whatchamacallit",
      "price": "86.95",
      "sale_price": "77",
      "subcategory": "Makeup"
    },
    {
      "id": "b5506d3c-ded5-4230-901c-78bddd8c4559",
      "category": "Electronics",
      "name": "Technology Item",
      "price": "17.99",
      "sale_price": "15",
      "subcategory": "Technology"
    },
    {
      "id": "d7c5e16b-798f-451b-b9ad-12c8022b99fb",
      "category": "Clothing",
      "name": "Kids Paraphernalia",
      "price": "31.95",
      "sale_price": "21.95",
      "subcategory": "Kids"
    },
    {
      "id": "de001a8e-8c50-4110-9a55-cbe3adeac9ec",
      "category": "Automotive",
      "name": "Truck Thingamajig",
      "price": "86.95",
      "sale_price": "77.95",
      "subcategory": "Truck"
    },
    {
      "id": "9b9b1a3c-13d2-4c13-bf0c-598553880db0",
      "category": "Clothing",
      "name": "Baby Gadget",
      "price": "65",
      "sale_price": "52.99",
      "subcategory": "Baby"
    },
    {
      "id": "a77c21c2-22a6-4104-8479-56257748c986",
      "category": "Home",
      "name": "Cleaning Doodad",
      "price": "38.99",
      "sale_price": "26.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "a5cd3321-d979-4142-8007-56b79427732b",
      "category": "Beauty",
      "name": "Makeup Device",
      "price": "199.95",
      "sale_price": "119.95",
      "subcategory": "Makeup"
    },
    {
      "id": "a5706809-a440-42d3-b6c3-60e349a4acd6",
      "category": "Entertainment",
      "name": "Toy Component",
      "price": "158",
      "sale_price": "142.99",
      "subcategory": "Toy"
    },
    {
      "id": "e7f2861e-989a-48ba-89f6-097e73cc235d",
      "category": "Beauty",
      "name": "Skin Care Item",
      "price": "102.99",
      "sale_price": "71.95",
      "subcategory": "Skin Care"
    },
    {
      "id": "3504bc03-101c-43ff-916c-7386cd64ee55",
      "category": "Electronics",
      "name": "Phone Kit",
      "price": "143",
      "sale_price": "114",
      "subcategory": "Phone"
    },
    {
      "id": "f0120fe2-327e-4abb-9de7-ded3252a2cb6",
      "category": "Activity",
      "name": "Swimming Tool",
      "price": "146.95",
      "sale_price": "87.95",
      "subcategory": "Swimming"
    },
    {
      "id": "6ae1b982-ef78-47a8-a4cf-375261c1e749",
      "category": "Electronics",
      "name": "Technology Rig",
      "price": "194.99",
      "sale_price": "174",
      "subcategory": "Technology"
    },
    {
      "id": "9b0d38f2-906c-446e-8c00-eec12ce04e93",
      "category": "Home",
      "name": "Furniture Gadget",
      "price": "170",
      "sale_price": "102.95",
      "subcategory": "Furniture"
    },
    {
      "id": "35b9f03f-7369-4a70-b45f-d68e0521472e",
      "category": "Home",
      "name": "Home Improvement Instrument",
      "price": "158",
      "sale_price": "142.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "8a5c8770-8475-4b34-aa51-f8da656d7caa",
      "category": "Beauty",
      "name": "Bath Tool",
      "price": "37.95",
      "sale_price": "22",
      "subcategory": "Bath"
    },
    {
      "id": "95fe6537-cda7-4442-bd97-cbf854495f1c",
      "category": "Home",
      "name": "Home Improvement Whatchamacallit",
      "price": "196",
      "sale_price": "156.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "c6b6988f-87c7-4cab-8c6e-99fbade462f9",
      "category": "Home",
      "name": "Home Improvement Machine",
      "price": "24.99",
      "sale_price": "14.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "bc857257-7092-4f5f-9385-7ba3b8686638",
      "category": "Activity",
      "name": "Outdoors Mechanism",
      "price": "65",
      "sale_price": "52.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "e06aa83f-78a7-4365-8f1f-dd3ffbbc40db",
      "category": "Clothing",
      "name": "Baby Item",
      "price": "52.95",
      "sale_price": "41",
      "subcategory": "Baby"
    },
    {
      "id": "e3d69047-41bb-47c1-846f-5bb8dc0f11e5",
      "category": "Home",
      "name": "Kitchen Machine",
      "price": "166.99",
      "sale_price": "132.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "7daa52e7-9eed-46a8-9cea-68049250ab53",
      "category": "Home",
      "name": "Gardening Supplies",
      "price": "150",
      "sale_price": "120.95",
      "subcategory": "Gardening"
    },
    {
      "id": "cf35f527-97a0-42e0-a2ec-f6380995e66d",
      "category": "Clothing",
      "name": "Mens Kit",
      "price": "122.99",
      "sale_price": "85.95",
      "subcategory": "Mens"
    },
    {
      "id": "0e3feceb-5539-4418-bed0-6ab48c20b1b3",
      "category": "Home",
      "name": "Cooking Gadget",
      "price": "175",
      "sale_price": "105",
      "subcategory": "Cooking"
    },
    {
      "id": "f506247f-fefa-48ea-8b9a-d0f5d18fa080",
      "category": "Health",
      "name": "Medicine Implement",
      "price": "68.99",
      "sale_price": "40.95",
      "subcategory": "Medicine"
    },
    {
      "id": "cd0f2c02-e33d-4fdc-8952-b1b7f92f43fc",
      "category": "Electronics",
      "name": "Camera Tool",
      "price": "145.99",
      "sale_price": "116.95",
      "subcategory": "Camera"
    },
    {
      "id": "df4e2d01-988a-43f1-9853-951dd331f1b6",
      "category": "Activity",
      "name": "Camping Rig",
      "price": "46.99",
      "sale_price": "36.99",
      "subcategory": "Camping"
    },
    {
      "id": "5406ce1f-d3bd-4c23-ab3d-7523114fd0bb",
      "category": "Pets",
      "name": "Cat Attachment",
      "price": "195",
      "sale_price": "156.99",
      "subcategory": "Cat"
    },
    {
      "id": "cfa90ad3-63bc-49bd-9853-99c2b7c41ab6",
      "category": "Entertainment",
      "name": "Toy Machine",
      "price": "163",
      "sale_price": "146",
      "subcategory": "Toy"
    },
    {
      "id": "7351de22-8394-4fda-90e9-d961ea128963",
      "category": "Home",
      "name": "Kitchen Contraption",
      "price": "128",
      "sale_price": "102.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "0b17729f-6e07-48cf-9052-45d645274a7a",
      "category": "Clothing",
      "name": "Mens Contraption",
      "price": "151.95",
      "sale_price": "135",
      "subcategory": "Mens"
    },
    {
      "id": "3017a745-31ea-4c07-bafb-1e5dda7e15ab",
      "category": "Activity",
      "name": "Outdoors Implement",
      "price": "19.99",
      "sale_price": "15.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "1559bdd0-d507-489b-a73d-e4e296086817",
      "category": "Home",
      "name": "Cleaning Accessory",
      "price": "128.99",
      "sale_price": "102.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "c8c9b84a-88dc-4512-9ed9-547c443319f1",
      "category": "Home",
      "name": "Home Improvement Whatchamacallit",
      "price": "31.95",
      "sale_price": "18",
      "subcategory": "Home Improvement"
    },
    {
      "id": "38a3b870-ad37-4b8a-9296-847e2e263151",
      "category": "Automotive",
      "name": "Tire Whatchamacallit",
      "price": "193.95",
      "sale_price": "135.95",
      "subcategory": "Tire"
    },
    {
      "id": "4c283f77-bd86-448f-abeb-ebb87ef4b8bb",
      "category": "Entertainment",
      "name": "Game Gizmo",
      "price": "82.99",
      "sale_price": "57.95",
      "subcategory": "Game"
    },
    {
      "id": "89ec431a-cf60-4a27-9698-5a8bb7dbfae1",
      "category": "Health",
      "name": "Nutrition Attachment",
      "price": "40.95",
      "sale_price": "28.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "0a85fed1-6e86-45e9-8ee9-918b6b2dc066",
      "category": "Entertainment",
      "name": "Movie Whatchamacallit",
      "price": "61",
      "sale_price": "48.99",
      "subcategory": "Movie"
    },
    {
      "id": "f4501153-8ca6-4444-a9e2-6959d52082d6",
      "category": "Entertainment",
      "name": "Toy Apparatus",
      "price": "57.95",
      "sale_price": "34.99",
      "subcategory": "Toy"
    },
    {
      "id": "20f50bd8-131e-4edc-a044-4d6db5e317f9",
      "category": "Automotive",
      "name": "Car Gizmo",
      "price": "120.99",
      "sale_price": "96.95",
      "subcategory": "Car"
    },
    {
      "id": "5bc524eb-08ed-43c5-97f6-d999e3c7a5e9",
      "category": "Home",
      "name": "Cleaning Contraption",
      "price": "164",
      "sale_price": "114.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "9e390808-2113-4805-905e-c995b2dcb944",
      "category": "Beauty",
      "name": "Personal Doodad",
      "price": "41",
      "sale_price": "36.95",
      "subcategory": "Personal"
    },
    {
      "id": "d04d6be1-0e59-4d1f-b575-32c346f6e42c",
      "category": "Entertainment",
      "name": "Game Thingamajig",
      "price": "100.99",
      "sale_price": "70.95",
      "subcategory": "Game"
    },
    {
      "id": "b7b26c7a-ad83-4def-b763-e75336d5dfe7",
      "category": "Home",
      "name": "Cleaning Doodad",
      "price": "174",
      "sale_price": "139",
      "subcategory": "Cleaning"
    },
    {
      "id": "5d397bfd-e0ad-44b9-a938-f06e297c1385",
      "category": "Automotive",
      "name": "Tire Instrument",
      "price": "160",
      "sale_price": "96.95",
      "subcategory": "Tire"
    },
    {
      "id": "a334393a-3ec7-486a-a646-26c54f31df38",
      "category": "Activity",
      "name": "Camping Tool",
      "price": "168.99",
      "sale_price": "100",
      "subcategory": "Camping"
    },
    {
      "id": "74e31c8c-28bf-464c-826f-66a3cef8b8eb",
      "category": "Health",
      "name": "Nutrition Equipment",
      "price": "108.95",
      "sale_price": "64.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "42cdb3a5-d3e9-483d-87a4-29f529a3c267",
      "category": "Beauty",
      "name": "Bath Widget",
      "price": "70.95",
      "sale_price": "63.99",
      "subcategory": "Bath"
    },
    {
      "id": "fbfe3f48-d664-4522-844d-5e39753226cd",
      "category": "Automotive",
      "name": "Truck Tool",
      "price": "18.99",
      "sale_price": "12",
      "subcategory": "Truck"
    },
    {
      "id": "fda539ff-9483-4557-a406-c9408f4ae2e5",
      "category": "Automotive",
      "name": "Car Mechanism",
      "price": "78.95",
      "sale_price": "70.95",
      "subcategory": "Car"
    },
    {
      "id": "130978c0-1245-4029-82fa-cc861c8ea4b9",
      "category": "Beauty",
      "name": "Bath Implement",
      "price": "57.99",
      "sale_price": "34.99",
      "subcategory": "Bath"
    },
    {
      "id": "d7b28c24-1584-467e-aad6-45da04c183e8",
      "category": "Electronics",
      "name": "Technology Machine",
      "price": "184.99",
      "sale_price": "165.99",
      "subcategory": "Technology"
    },
    {
      "id": "d4fc6940-c939-4748-9909-e6690c8ecbcd",
      "category": "Health",
      "name": "Vitamin Instrument",
      "price": "114",
      "sale_price": "91.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "853f36bc-ad4d-4ff9-96b1-997c71ebccf5",
      "category": "Clothing",
      "name": "Kids Component",
      "price": "68.99",
      "sale_price": "54",
      "subcategory": "Kids"
    },
    {
      "id": "f3a64877-3bd4-4712-8ee4-d489bf376937",
      "category": "Health",
      "name": "Nutrition Thingamajig",
      "price": "97.95",
      "sale_price": "67",
      "subcategory": "Nutrition"
    },
    {
      "id": "d460a6de-bdab-4b6d-b937-aeed14716e30",
      "category": "Home",
      "name": "Cleaning Thingamajig",
      "price": "104",
      "sale_price": "62.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "006f1945-aa96-40fb-ba1d-1d2d9bbf21eb",
      "category": "Entertainment",
      "name": "Book Tool",
      "price": "108",
      "sale_price": "75.99",
      "subcategory": "Book"
    },
    {
      "id": "1609ac87-c32a-4d1a-8b75-234cbeb84786",
      "category": "Clothing",
      "name": "Mens Instrument",
      "price": "158.99",
      "sale_price": "142.95",
      "subcategory": "Mens"
    },
    {
      "id": "ccb39380-ea12-4681-b1f0-90c1f8b92dc6",
      "category": "Activity",
      "name": "Biking Machine",
      "price": "104",
      "sale_price": "93.95",
      "subcategory": "Biking"
    },
    {
      "id": "8bc8251a-7c3d-4ac9-ab6a-9e49789c7b67",
      "category": "Activity",
      "name": "Outdoors Mechanism",
      "price": "189.99",
      "sale_price": "113.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "9fd0847b-ac73-40a5-80dd-a96d7024de77",
      "category": "Beauty",
      "name": "Makeup Equipment",
      "price": "13.95",
      "sale_price": "11.99",
      "subcategory": "Makeup"
    },
    {
      "id": "6a68bc39-da1e-49af-8268-5d9fc6399a8d",
      "category": "Pets",
      "name": "Cat Accessory",
      "price": "122",
      "sale_price": "85.95",
      "subcategory": "Cat"
    },
    {
      "id": "80b6575f-0c73-4507-a1ab-7945957b3f91",
      "category": "Entertainment",
      "name": "Book Doodad",
      "price": "85.95",
      "sale_price": "59.99",
      "subcategory": "Book"
    },
    {
      "id": "7aec1bd8-c9aa-466f-aa77-6ecb7f49be03",
      "category": "Electronics",
      "name": "Phone Component",
      "price": "83.95",
      "sale_price": "58",
      "subcategory": "Phone"
    },
    {
      "id": "b7e23d1a-1f9d-4e61-84fd-3595bcf10801",
      "category": "Home",
      "name": "Cooking Contraption",
      "price": "110.95",
      "sale_price": "77.95",
      "subcategory": "Cooking"
    },
    {
      "id": "e12f86d5-f4db-433c-b11d-da6368a5919c",
      "category": "Pets",
      "name": "Aquarium Supplies",
      "price": "190.95",
      "sale_price": "152.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "18c9f5de-35ca-4c20-8795-12e9e13b4b6f",
      "category": "Beauty",
      "name": "Makeup Whatchamacallit",
      "price": "125",
      "sale_price": "112.95",
      "subcategory": "Makeup"
    },
    {
      "id": "47f8c43c-1b28-4bc0-b1d2-9b975b4f6185",
      "category": "Electronics",
      "name": "Computer Implement",
      "price": "189.99",
      "sale_price": "170",
      "subcategory": "Computer"
    },
    {
      "id": "9d84bf39-00ca-44b8-9526-8a6c02dacf16",
      "category": "Automotive",
      "name": "Engine Apparatus",
      "price": "154.95",
      "sale_price": "92.95",
      "subcategory": "Engine"
    },
    {
      "id": "e09a4241-f2a8-4855-9589-1e712e3e1639",
      "category": "Clothing",
      "name": "Baby Apparatus",
      "price": "99.99",
      "sale_price": "59.99",
      "subcategory": "Baby"
    },
    {
      "id": "5e753cbd-d8a2-4ece-8ece-522f6ce1c100",
      "category": "Activity",
      "name": "Swimming Tool",
      "price": "177.95",
      "sale_price": "159.99",
      "subcategory": "Swimming"
    },
    {
      "id": "50682eb2-5247-478d-a525-c1e8809ec091",
      "category": "Health",
      "name": "Medicine Machine",
      "price": "175.99",
      "sale_price": "122.95",
      "subcategory": "Medicine"
    },
    {
      "id": "c1b8cf19-c982-49f1-84ac-6f18c2b49a1b",
      "category": "Home",
      "name": "Home Improvement Widget",
      "price": "21.95",
      "sale_price": "16.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "e38f0069-9f80-40a8-8e30-5a14f110ef6e",
      "category": "Home",
      "name": "Cooking Attachment",
      "price": "152",
      "sale_price": "91.95",
      "subcategory": "Cooking"
    },
    {
      "id": "6adb8628-e2e3-48f0-8a40-02fac6818714",
      "category": "Clothing",
      "name": "Jewelry Component",
      "price": "149.95",
      "sale_price": "89.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "4a31f15f-e2fe-4442-80e8-a9b86e4b3610",
      "category": "Home",
      "name": "Kitchen Contraption",
      "price": "168.95",
      "sale_price": "100.99",
      "subcategory": "Kitchen"
    },
    {
      "id": "d27f4f4f-0a0a-4ca6-8513-fa9f5ef17162",
      "category": "Home",
      "name": "Home Improvement Contraption",
      "price": "184.99",
      "sale_price": "165.95",
      "subcategory": "Home Improvement"
    },
    {
      "id": "6cf44c2b-a765-4c95-86c5-6190c7f8705a",
      "category": "Home",
      "name": "Gardening Instrument",
      "price": "170.99",
      "sale_price": "102.95",
      "subcategory": "Gardening"
    },
    {
      "id": "85ab0bfc-82f6-4a0e-a0ad-55f818c7fedc",
      "category": "Pets",
      "name": "Dog Instrument",
      "price": "130.99",
      "sale_price": "78.99",
      "subcategory": "Dog"
    },
    {
      "id": "24bfe770-4a36-476b-9f35-a1031d0df3a8",
      "category": "Clothing",
      "name": "Jewelry Tool",
      "price": "80.95",
      "sale_price": "72.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "0e75a756-2f83-47a3-8456-420e9237df06",
      "category": "Clothing",
      "name": "Womens Device",
      "price": "198.95",
      "sale_price": "158.95",
      "subcategory": "Womens"
    },
    {
      "id": "6c781675-db61-44aa-8f0e-315bcc47e7f3",
      "category": "Beauty",
      "name": "Hair Care Gizmo",
      "price": "165",
      "sale_price": "148.95",
      "subcategory": "Hair Care"
    },
    {
      "id": "01a5f039-85ab-4184-946e-526bd09beb99",
      "category": "Entertainment",
      "name": "Movie Device",
      "price": "89",
      "sale_price": "80.95",
      "subcategory": "Movie"
    },
    {
      "id": "e325303f-b179-492b-8dea-af982ffeaa88",
      "category": "Entertainment",
      "name": "Toy Machine",
      "price": "118",
      "sale_price": "82.99",
      "subcategory": "Toy"
    },
    {
      "id": "46cfc061-2067-42b0-8b1a-928edf584dd2",
      "category": "Health",
      "name": "First Aid Implement",
      "price": "179.95",
      "sale_price": "125",
      "subcategory": "First Aid"
    },
    {
      "id": "33686f9c-c694-4593-b286-b8f13ea37a71",
      "category": "Electronics",
      "name": "Phone Attachment",
      "price": "72.99",
      "sale_price": "50.99",
      "subcategory": "Phone"
    },
    {
      "id": "0ebccdc9-883c-498d-b596-a4d939788ee0",
      "category": "Automotive",
      "name": "Car Supplies",
      "price": "45.95",
      "sale_price": "40.95",
      "subcategory": "Car"
    },
    {
      "id": "872bcb96-601e-4ba0-85aa-030ab24bfbff",
      "category": "Beauty",
      "name": "Skin Care Rig",
      "price": "31.99",
      "sale_price": "21",
      "subcategory": "Skin Care"
    },
    {
      "id": "6e11bca1-9ba2-4ef5-a902-8f0e8a06197f",
      "category": "Pets",
      "name": "Cat Kit",
      "price": "123",
      "sale_price": "73",
      "subcategory": "Cat"
    },
    {
      "id": "f130a388-2113-43a6-bf74-30a878fdc6f6",
      "category": "Activity",
      "name": "Camping Mechanism",
      "price": "150.95",
      "sale_price": "90.95",
      "subcategory": "Camping"
    },
    {
      "id": "96072127-1f41-40ae-a56f-2d9501f7c462",
      "category": "Activity",
      "name": "Fitness Component",
      "price": "171.99",
      "sale_price": "153",
      "subcategory": "Fitness"
    },
    {
      "id": "b35d6646-12a4-42fb-993a-79b9265a1bcf",
      "category": "Clothing",
      "name": "Baby Component",
      "price": "135.95",
      "sale_price": "121",
      "subcategory": "Baby"
    },
    {
      "id": "4b896cc6-5fc6-4d41-9b86-a88477802bb7",
      "category": "Beauty",
      "name": "Personal Equipment",
      "price": "87",
      "sale_price": "69.99",
      "subcategory": "Personal"
    },
    {
      "id": "3ede60a7-a490-4706-813b-ccb500dff49f",
      "category": "Clothing",
      "name": "Womens Gizmo",
      "price": "130.99",
      "sale_price": "78.99",
      "subcategory": "Womens"
    },
    {
      "id": "d0689c2c-fb0a-4a22-ba8b-59b87b396258",
      "category": "Home",
      "name": "Cleaning Contraption",
      "price": "123.99",
      "sale_price": "110.95",
      "subcategory": "Cleaning"
    },
    {
      "id": "6863651e-519a-4c43-afd0-1c34d4e9fa69",
      "category": "Home",
      "name": "Cooking Device",
      "price": "10.99",
      "sale_price": "7.95",
      "subcategory": "Cooking"
    },
    {
      "id": "d0d9149d-a340-4548-8a37-370b538652a9",
      "category": "Activity",
      "name": "Camping Implement",
      "price": "35.99",
      "sale_price": "28.99",
      "subcategory": "Camping"
    },
    {
      "id": "1fa6e306-9f97-4929-a038-12b3337175ba",
      "category": "Home",
      "name": "Bedding Accessory",
      "price": "84",
      "sale_price": "58",
      "subcategory": "Bedding"
    },
    {
      "id": "b165e398-0c86-4923-8afb-1312b02962e5",
      "category": "Activity",
      "name": "Fitness Item",
      "price": "98.99",
      "sale_price": "88",
      "subcategory": "Fitness"
    },
    {
      "id": "3fd38109-a5c0-4b7b-b9d9-c5e870ab6a3c",
      "category": "Beauty",
      "name": "Skin Care Paraphernalia",
      "price": "42.99",
      "sale_price": "37.95",
      "subcategory": "Skin Care"
    },
    {
      "id": "2adcfd47-37d0-4403-80d7-dac418b15a46",
      "category": "Electronics",
      "name": "Computer Equipment",
      "price": "59.99",
      "sale_price": "53",
      "subcategory": "Computer"
    },
    {
      "id": "e47fa853-5a55-4be3-b9ff-c96e6c739bf2",
      "category": "Clothing",
      "name": "Kids Paraphernalia",
      "price": "25.99",
      "sale_price": "20.99",
      "subcategory": "Kids"
    },
    {
      "id": "98edd0fe-272b-4e81-baf8-e5adcbb5d6bd",
      "category": "Clothing",
      "name": "Baby Gizmo",
      "price": "36.99",
      "sale_price": "28.95",
      "subcategory": "Baby"
    },
    {
      "id": "f5d300a5-edc7-4983-936b-08c74fb78c7a",
      "category": "Home",
      "name": "Dining Rig",
      "price": "188.99",
      "sale_price": "150",
      "subcategory": "Dining"
    },
    {
      "id": "3feb653d-2f78-4fe4-aa41-e47eda08bd9b",
      "category": "Clothing",
      "name": "Mens Machine",
      "price": "75.95",
      "sale_price": "67.99",
      "subcategory": "Mens"
    },
    {
      "id": "9f267cf0-8d82-4f9a-a813-59de4aaa83bf",
      "category": "Entertainment",
      "name": "Music Gear",
      "price": "148.99",
      "sale_price": "133",
      "subcategory": "Music"
    },
    {
      "id": "909a228d-9fbe-4d15-b24b-292aa9c707a9",
      "category": "Beauty",
      "name": "Bath Thingamajig",
      "price": "21",
      "sale_price": "14.99",
      "subcategory": "Bath"
    },
    {
      "id": "66b83ce0-42d5-4112-a58a-c77b3086d594",
      "category": "Entertainment",
      "name": "Game Component",
      "price": "170.99",
      "sale_price": "136.95",
      "subcategory": "Game"
    },
    {
      "id": "70456076-3590-483e-bd5c-a4b21df243a9",
      "category": "Beauty",
      "name": "Personal Equipment",
      "price": "16.95",
      "sale_price": "9",
      "subcategory": "Personal"
    },
    {
      "id": "01898d36-871b-4a15-99a5-65e9caba818e",
      "category": "Health",
      "name": "Nutrition Equipment",
      "price": "125.99",
      "sale_price": "100.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "1e62bb2a-878c-48f6-9ffe-a4dd7fd1138e",
      "category": "Home",
      "name": "Furniture Doodad",
      "price": "16",
      "sale_price": "12.95",
      "subcategory": "Furniture"
    },
    {
      "id": "5b5b8464-6a1e-4033-9a20-de6c53d5129a",
      "category": "Health",
      "name": "Vitamin Implement",
      "price": "145.95",
      "sale_price": "130.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "ef008e12-e09f-4c19-84c7-1be793fb66df",
      "category": "Home",
      "name": "Cooking Thingamajig",
      "price": "197.95",
      "sale_price": "157.99",
      "subcategory": "Cooking"
    },
    {
      "id": "88e3df6c-a82b-4498-8d4a-8b32c4db70d3",
      "category": "Activity",
      "name": "Biking Doodad",
      "price": "162.99",
      "sale_price": "97",
      "subcategory": "Biking"
    },
    {
      "id": "ad80281e-917a-4dde-8ebe-fcc232a3df6d",
      "category": "Home",
      "name": "Cleaning Gear",
      "price": "122",
      "sale_price": "85.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "aa425e34-d5d3-46c6-b885-f965f22a1b23",
      "category": "Clothing",
      "name": "Womens Instrument",
      "price": "46.99",
      "sale_price": "32.95",
      "subcategory": "Womens"
    },
    {
      "id": "58de6104-0c3e-4888-9fbe-2c3cbb004049",
      "category": "Activity",
      "name": "Outdoors Apparatus",
      "price": "180.95",
      "sale_price": "108.99",
      "subcategory": "Outdoors"
    },
    {
      "id": "9f63ee49-053e-4297-9927-17453f13c2b0",
      "category": "Automotive",
      "name": "Truck Widget",
      "price": "73.95",
      "sale_price": "65",
      "subcategory": "Truck"
    },
    {
      "id": "21e3b756-c6f1-4c38-8422-7764740b520b",
      "category": "Activity",
      "name": "Sports Equipment",
      "price": "73",
      "sale_price": "65",
      "subcategory": "Sports"
    },
    {
      "id": "d6d982ad-b2a9-47c8-9d9d-c1516eda861f",
      "category": "Beauty",
      "name": "Skin Care Component",
      "price": "38.99",
      "sale_price": "26.95",
      "subcategory": "Skin Care"
    },
    {
      "id": "6ffff61c-5a56-4273-ae02-2b18922a2229",
      "category": "Clothing",
      "name": "Jewelry Device",
      "price": "11.95",
      "sale_price": "8.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "c1d0488c-329e-408f-8f8f-61903227c7d9",
      "category": "Entertainment",
      "name": "Game Tool",
      "price": "184",
      "sale_price": "147",
      "subcategory": "Game"
    },
    {
      "id": "0fa5630d-924c-410d-98e3-f24d1eab8b50",
      "category": "Home",
      "name": "Cooking Paraphernalia",
      "price": "17.95",
      "sale_price": "13.95",
      "subcategory": "Cooking"
    },
    {
      "id": "cf3a41c1-8de6-4d25-8300-b94619413531",
      "category": "Home",
      "name": "Gardening Attachment",
      "price": "41.99",
      "sale_price": "28.95",
      "subcategory": "Gardening"
    },
    {
      "id": "704855c5-ba95-4f58-bdae-f04c9225b2b2",
      "category": "Activity",
      "name": "Swimming Tool",
      "price": "152.95",
      "sale_price": "136",
      "subcategory": "Swimming"
    },
    {
      "id": "56d54696-a895-4590-9999-f62df347ac94",
      "category": "Automotive",
      "name": "Tire Whatchamacallit",
      "price": "52.99",
      "sale_price": "46.99",
      "subcategory": "Tire"
    },
    {
      "id": "b66ce7df-ab57-46b3-9d41-838405a0d203",
      "category": "Health",
      "name": "Nutrition Mechanism",
      "price": "46.95",
      "sale_price": "41.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "8a3cd08d-c655-42d7-8bac-57565a109a96",
      "category": "Activity",
      "name": "Fitness Rig",
      "price": "171",
      "sale_price": "119.99",
      "subcategory": "Fitness"
    },
    {
      "id": "5ddf75a7-b504-4296-8a49-c523038967f6",
      "category": "Electronics",
      "name": "Computer Thingamajig",
      "price": "38.99",
      "sale_price": "22",
      "subcategory": "Computer"
    },
    {
      "id": "0babe7d4-bd8d-44e5-8aec-ba60118ddc35",
      "category": "Electronics",
      "name": "Computer Mechanism",
      "price": "11",
      "sale_price": "8.99",
      "subcategory": "Computer"
    },
    {
      "id": "f1cf8cb1-5cad-4b07-a08c-e4553e31b522",
      "category": "Pets",
      "name": "Dog Paraphernalia",
      "price": "137.99",
      "sale_price": "82.99",
      "subcategory": "Dog"
    },
    {
      "id": "5c7de54a-0427-4703-83dc-185253ba4e89",
      "category": "Electronics",
      "name": "Phone Rig",
      "price": "33.99",
      "sale_price": "26.95",
      "subcategory": "Phone"
    },
    {
      "id": "74d684d8-136a-4131-992b-cba860fb5b36",
      "category": "Activity",
      "name": "Biking Thingamajig",
      "price": "18",
      "sale_price": "12.95",
      "subcategory": "Biking"
    },
    {
      "id": "3eedc474-d205-429c-bfa2-c50593050996",
      "category": "Home",
      "name": "Gardening Device",
      "price": "194.95",
      "sale_price": "135.99",
      "subcategory": "Gardening"
    },
    {
      "id": "a9b81210-882f-4e91-9581-921fb7e674ec",
      "category": "Pets",
      "name": "Cat Doodad",
      "price": "76.95",
      "sale_price": "60",
      "subcategory": "Cat"
    },
    {
      "id": "6caa3f15-e129-4f04-8fd1-b47e05ad84a3",
      "category": "Entertainment",
      "name": "Music Widget",
      "price": "140",
      "sale_price": "98",
      "subcategory": "Music"
    },
    {
      "id": "83d986ec-04e9-48b2-823b-3f1b5469b364",
      "category": "Health",
      "name": "Nutrition Equipment",
      "price": "174.99",
      "sale_price": "104.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "a90e1562-2f29-4021-824a-541819c83910",
      "category": "Entertainment",
      "name": "Movie Contraption",
      "price": "26.95",
      "sale_price": "18",
      "subcategory": "Movie"
    },
    {
      "id": "cd093085-7245-4727-93bb-0c5a4621f432",
      "category": "Automotive",
      "name": "Truck Paraphernalia",
      "price": "96.95",
      "sale_price": "57.95",
      "subcategory": "Truck"
    },
    {
      "id": "54aac905-55d5-497d-be43-73f1ae457a6a",
      "category": "Entertainment",
      "name": "Music Apparatus",
      "price": "98.99",
      "sale_price": "88",
      "subcategory": "Music"
    },
    {
      "id": "e4251df0-6532-47ae-8110-aa690bbaa51e",
      "category": "Home",
      "name": "Storage Kit",
      "price": "72.95",
      "sale_price": "64.95",
      "subcategory": "Storage"
    },
    {
      "id": "df466ac8-687c-43d2-8f93-37ec5c185316",
      "category": "Electronics",
      "name": "Computer Rig",
      "price": "80",
      "sale_price": "72",
      "subcategory": "Computer"
    },
    {
      "id": "ab2e54ff-04a7-4784-9e96-91d7b754080f",
      "category": "Clothing",
      "name": "Womens Rig",
      "price": "45",
      "sale_price": "27",
      "subcategory": "Womens"
    },
    {
      "id": "b967da8f-7645-46f3-b42c-5a2f11697403",
      "category": "Pets",
      "name": "Aquarium Widget",
      "price": "68",
      "sale_price": "40",
      "subcategory": "Aquarium"
    },
    {
      "id": "104042df-ff2d-4f6f-bd1f-f95d02aabd39",
      "category": "Entertainment",
      "name": "Music Item",
      "price": "83",
      "sale_price": "49",
      "subcategory": "Music"
    },
    {
      "id": "8f8f17b1-67c5-44d7-b121-7c6b7b38a2c9",
      "category": "Pets",
      "name": "Dog Implement",
      "price": "35.95",
      "sale_price": "31.99",
      "subcategory": "Dog"
    },
    {
      "id": "3232b2eb-1cfa-4dc0-9bfa-c3eec5130f60",
      "category": "Home",
      "name": "Storage Gizmo",
      "price": "96",
      "sale_price": "67.99",
      "subcategory": "Storage"
    },
    {
      "id": "b46462f7-be88-4f3d-b06d-446620d9bbea",
      "category": "Automotive",
      "name": "Car Component",
      "price": "137.99",
      "sale_price": "95.99",
      "subcategory": "Car"
    },
    {
      "id": "bff6a5dd-cc62-49d3-8bb4-beee7ca6a78e",
      "category": "Home",
      "name": "Gardening Rig",
      "price": "145.99",
      "sale_price": "116.95",
      "subcategory": "Gardening"
    },
    {
      "id": "6977a2b4-342a-46ce-a360-ee8717d40499",
      "category": "Beauty",
      "name": "Personal Implement",
      "price": "49.95",
      "sale_price": "39",
      "subcategory": "Personal"
    },
    {
      "id": "b9ab1eb6-fc41-4a3d-9011-cfe8df3aea1c",
      "category": "Electronics",
      "name": "Phone Gadget",
      "price": "13.99",
      "sale_price": "9.95",
      "subcategory": "Phone"
    },
    {
      "id": "673ca9ed-4feb-4073-8d00-56552c894201",
      "category": "Clothing",
      "name": "Baby Apparatus",
      "price": "46",
      "sale_price": "32.95",
      "subcategory": "Baby"
    },
    {
      "id": "02fbdc7a-89dc-435f-8e75-7ac65739c23e",
      "category": "Clothing",
      "name": "Womens Equipment",
      "price": "111",
      "sale_price": "77.99",
      "subcategory": "Womens"
    },
    {
      "id": "9036df0f-391f-446c-b488-9ef23a750352",
      "category": "Home",
      "name": "Kitchen Attachment",
      "price": "43.95",
      "sale_price": "25.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "9ed204b7-a291-48d2-93e7-b42a072d612d",
      "category": "Home",
      "name": "Home Improvement Kit",
      "price": "135.99",
      "sale_price": "94.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "fa1a4ccd-1cb9-44e4-84c5-4fef7e2e1c39",
      "category": "Electronics",
      "name": "Camera Gizmo",
      "price": "109.99",
      "sale_price": "76.99",
      "subcategory": "Camera"
    },
    {
      "id": "2572a649-8c44-49e4-82c2-7bc11bdc94d8",
      "category": "Home",
      "name": "Storage Device",
      "price": "117.99",
      "sale_price": "93.95",
      "subcategory": "Storage"
    },
    {
      "id": "d33b82b6-beb7-42f3-8531-225111ad8e22",
      "category": "Entertainment",
      "name": "Party Kit",
      "price": "187.95",
      "sale_price": "112",
      "subcategory": "Party"
    },
    {
      "id": "b99233d4-d7d5-473a-bd92-3a4c17b2d086",
      "category": "Beauty",
      "name": "Personal Tool",
      "price": "92.95",
      "sale_price": "73.95",
      "subcategory": "Personal"
    },
    {
      "id": "212483ed-2be4-4cfd-91a6-df851316d062",
      "category": "Home",
      "name": "Gardening Accessory",
      "price": "134",
      "sale_price": "107.99",
      "subcategory": "Gardening"
    },
    {
      "id": "3c6acadf-1f1d-4514-8031-ce84c20070ee",
      "category": "Automotive",
      "name": "Car Accessory",
      "price": "122",
      "sale_price": "109.99",
      "subcategory": "Car"
    },
    {
      "id": "a2caae61-4171-48e3-a345-dc6e12ca34c5",
      "category": "Automotive",
      "name": "Car Item",
      "price": "96.99",
      "sale_price": "76.99",
      "subcategory": "Car"
    },
    {
      "id": "af1daab5-0848-4e72-b561-ac0eaab59d12",
      "category": "Beauty",
      "name": "Personal Tool",
      "price": "57",
      "sale_price": "39",
      "subcategory": "Personal"
    },
    {
      "id": "0f397750-4472-4553-9fe5-47866bae9f86",
      "category": "Clothing",
      "name": "Mens Gear",
      "price": "141.95",
      "sale_price": "84",
      "subcategory": "Mens"
    },
    {
      "id": "4b8353c5-f244-4c08-8c40-d5f91a99fe1d",
      "category": "Clothing",
      "name": "Kids Whatchamacallit",
      "price": "190.95",
      "sale_price": "133",
      "subcategory": "Kids"
    },
    {
      "id": "283eaee6-bb32-4b4f-a1bb-ed9b8c16a409",
      "category": "Electronics",
      "name": "Computer Thingamajig",
      "price": "98",
      "sale_price": "78",
      "subcategory": "Computer"
    },
    {
      "id": "d4880995-b84c-4b90-b72e-7c181274b734",
      "category": "Home",
      "name": "Home Improvement Gear",
      "price": "181.99",
      "sale_price": "126.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "87504464-62af-41de-b9dc-0c1862bc0362",
      "category": "Entertainment",
      "name": "Toy Apparatus",
      "price": "96",
      "sale_price": "86.99",
      "subcategory": "Toy"
    },
    {
      "id": "2fa9e989-7637-4275-9a95-54aea0a32e3d",
      "category": "Clothing",
      "name": "Jewelry Widget",
      "price": "27.99",
      "sale_price": "18.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "fb23ddcc-f0c2-4c23-8a25-202bcda04228",
      "category": "Home",
      "name": "Gardening Machine",
      "price": "34",
      "sale_price": "30",
      "subcategory": "Gardening"
    },
    {
      "id": "1206578b-0b52-4024-8d14-e3f69b0dec3b",
      "category": "Home",
      "name": "Bedding Contraption",
      "price": "71.95",
      "sale_price": "49.99",
      "subcategory": "Bedding"
    },
    {
      "id": "3f2fb84e-5406-400a-9358-7cec60b53ab4",
      "category": "Clothing",
      "name": "Mens Mechanism",
      "price": "129.99",
      "sale_price": "77.99",
      "subcategory": "Mens"
    },
    {
      "id": "bbecfc03-9abe-4db6-b8ee-0b6005bc7800",
      "category": "Clothing",
      "name": "Jewelry Attachment",
      "price": "169.99",
      "sale_price": "101.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "f4bcf89e-f73a-424a-814b-b95f8a440fa7",
      "category": "Beauty",
      "name": "Skin Care Instrument",
      "price": "58.99",
      "sale_price": "52",
      "subcategory": "Skin Care"
    },
    {
      "id": "8b338760-d9f9-4d99-b669-ccf9aa9f42bf",
      "category": "Activity",
      "name": "Fitness Device",
      "price": "139.95",
      "sale_price": "97.95",
      "subcategory": "Fitness"
    },
    {
      "id": "1b953cc6-d3be-4e97-8592-ffeb6d5a2a8d",
      "category": "Activity",
      "name": "Biking Attachment",
      "price": "85.99",
      "sale_price": "76",
      "subcategory": "Biking"
    },
    {
      "id": "6dd484cb-32b2-4595-a88b-ff6562ef8716",
      "category": "Activity",
      "name": "Camping Kit",
      "price": "134",
      "sale_price": "107.99",
      "subcategory": "Camping"
    },
    {
      "id": "eaece1f3-009b-4f80-8763-0751df8ff1fc",
      "category": "Beauty",
      "name": "Personal Kit",
      "price": "23.99",
      "sale_price": "18",
      "subcategory": "Personal"
    },
    {
      "id": "57e2126d-03f6-4ea5-b6a0-1a2697e60659",
      "category": "Electronics",
      "name": "Camera Item",
      "price": "165.95",
      "sale_price": "99",
      "subcategory": "Camera"
    },
    {
      "id": "f5893e81-0c3f-497a-ac31-0ce2c7c09d14",
      "category": "Entertainment",
      "name": "Music Equipment",
      "price": "199.99",
      "sale_price": "159.99",
      "subcategory": "Music"
    },
    {
      "id": "d2ae720f-48f0-4465-95b1-75f3861d3ea3",
      "category": "Home",
      "name": "Dining Rig",
      "price": "139.99",
      "sale_price": "97",
      "subcategory": "Dining"
    },
    {
      "id": "9d23e1ff-a6a6-41aa-9817-eb7b03156818",
      "category": "Automotive",
      "name": "Tire Gizmo",
      "price": "38",
      "sale_price": "22.99",
      "subcategory": "Tire"
    },
    {
      "id": "01e16c10-2c14-447f-966f-5cb9f237ff9c",
      "category": "Activity",
      "name": "Camping Equipment",
      "price": "155",
      "sale_price": "93.99",
      "subcategory": "Camping"
    },
    {
      "id": "2cc37168-1c2e-46d4-81b6-59c2b130c531",
      "category": "Home",
      "name": "Cooking Gear",
      "price": "47.95",
      "sale_price": "32.95",
      "subcategory": "Cooking"
    },
    {
      "id": "7c48b2d8-fab6-4580-a350-b49457041883",
      "category": "Electronics",
      "name": "Technology Rig",
      "price": "166",
      "sale_price": "116.95",
      "subcategory": "Technology"
    },
    {
      "id": "203c841e-cf0a-45b5-b900-0e94ed99f90a",
      "category": "Pets",
      "name": "Aquarium Implement",
      "price": "121.95",
      "sale_price": "84",
      "subcategory": "Aquarium"
    },
    {
      "id": "aa5e4d67-6056-4c57-af1a-924e5d394666",
      "category": "Clothing",
      "name": "Jewelry Supplies",
      "price": "42.99",
      "sale_price": "29",
      "subcategory": "Jewelry"
    },
    {
      "id": "0b1e274a-d12c-4b40-8186-514167b76c2c",
      "category": "Health",
      "name": "First Aid Equipment",
      "price": "95",
      "sale_price": "85.95",
      "subcategory": "First Aid"
    },
    {
      "id": "9fccbc9e-03f7-4123-b550-1d5be9aec93d",
      "category": "Electronics",
      "name": "Computer Instrument",
      "price": "128",
      "sale_price": "76.99",
      "subcategory": "Computer"
    },
    {
      "id": "9c6d0dae-17bb-46df-897b-be03a2521b8a",
      "category": "Pets",
      "name": "Aquarium Doodad",
      "price": "40.95",
      "sale_price": "32.95",
      "subcategory": "Aquarium"
    },
    {
      "id": "2350a9a5-4aa2-4990-9780-7645aa11e180",
      "category": "Clothing",
      "name": "Mens Machine",
      "price": "154.95",
      "sale_price": "138",
      "subcategory": "Mens"
    },
    {
      "id": "22702c2a-a7be-48ba-9b3d-a1597653b383",
      "category": "Beauty",
      "name": "Bath Accessory",
      "price": "61.95",
      "sale_price": "54",
      "subcategory": "Bath"
    },
    {
      "id": "5a3e59d2-4873-4fa9-83cc-d32de5185e6d",
      "category": "Home",
      "name": "Furniture Contraption",
      "price": "145",
      "sale_price": "101.95",
      "subcategory": "Furniture"
    },
    {
      "id": "7a873614-7a8f-4725-b0cf-580ad74936aa",
      "category": "Beauty",
      "name": "Hair Care Contraption",
      "price": "188.99",
      "sale_price": "112.95",
      "subcategory": "Hair Care"
    },
    {
      "id": "1ac8760e-2c53-473d-a05a-e1e52f678e48",
      "category": "Activity",
      "name": "Fitness Doodad",
      "price": "66.99",
      "sale_price": "59.99",
      "subcategory": "Fitness"
    },
    {
      "id": "b4a81dbf-07d3-4918-9f6c-c7978226fb56",
      "category": "Health",
      "name": "Vitamin Whatchamacallit",
      "price": "42.99",
      "sale_price": "37",
      "subcategory": "Vitamin"
    },
    {
      "id": "ab20335a-917f-4adc-ab23-b2d806ae7647",
      "category": "Beauty",
      "name": "Skin Care Attachment",
      "price": "66",
      "sale_price": "46",
      "subcategory": "Skin Care"
    },
    {
      "id": "a4e347b6-2267-4959-b023-ade214c9e115",
      "category": "Home",
      "name": "Cleaning Implement",
      "price": "50.95",
      "sale_price": "40.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "5edb9442-04ef-44b3-b534-ef52d9d5e0e2",
      "category": "Clothing",
      "name": "Womens Machine",
      "price": "140",
      "sale_price": "84",
      "subcategory": "Womens"
    },
    {
      "id": "ce0b375a-88fc-4706-85c4-d0334c1cceb4",
      "category": "Clothing",
      "name": "Jewelry Mechanism",
      "price": "38.95",
      "sale_price": "22",
      "subcategory": "Jewelry"
    },
    {
      "id": "f7e44391-a626-48bb-8178-9891c9d87d17",
      "category": "Pets",
      "name": "Aquarium Paraphernalia",
      "price": "178.95",
      "sale_price": "160.99",
      "subcategory": "Aquarium"
    },
    {
      "id": "0565378e-761b-4abe-a06c-a6ace20d2e67",
      "category": "Home",
      "name": "Kitchen Instrument",
      "price": "172.95",
      "sale_price": "154.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "05f17940-de3e-4ef7-bfed-7183c6d09765",
      "category": "Health",
      "name": "Nutrition Machine",
      "price": "58",
      "sale_price": "34.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "a832f340-c9b0-47f8-a410-0b26ff024d85",
      "category": "Electronics",
      "name": "Phone Tool",
      "price": "187.99",
      "sale_price": "168.95",
      "subcategory": "Phone"
    },
    {
      "id": "8955cbd8-18bb-42e2-b425-26eb28c9090c",
      "category": "Beauty",
      "name": "Hair Care Item",
      "price": "63",
      "sale_price": "44",
      "subcategory": "Hair Care"
    },
    {
      "id": "69a40f7c-e0b5-4370-806d-af17c342a501",
      "category": "Entertainment",
      "name": "Party Doodad",
      "price": "183",
      "sale_price": "146.99",
      "subcategory": "Party"
    },
    {
      "id": "9c7326b7-c436-4fd5-8f09-66ca37391e10",
      "category": "Health",
      "name": "Vitamin Implement",
      "price": "63",
      "sale_price": "56",
      "subcategory": "Vitamin"
    },
    {
      "id": "625c5837-aad1-4e7c-8225-9203423d70ae",
      "category": "Automotive",
      "name": "Car Apparatus",
      "price": "66",
      "sale_price": "46",
      "subcategory": "Car"
    },
    {
      "id": "65ff12b6-955e-4d56-901f-c72a78e154c9",
      "category": "Home",
      "name": "Home Improvement Gizmo",
      "price": "188.95",
      "sale_price": "150",
      "subcategory": "Home Improvement"
    },
    {
      "id": "38c026a3-db5b-48b4-a2ff-a13b2e0d4290",
      "category": "Clothing",
      "name": "Baby Mechanism",
      "price": "77.95",
      "sale_price": "69",
      "subcategory": "Baby"
    },
    {
      "id": "0aec2459-148f-4c93-960c-dc3b72443858",
      "category": "Electronics",
      "name": "Phone Attachment",
      "price": "42",
      "sale_price": "25.99",
      "subcategory": "Phone"
    },
    {
      "id": "e6fbf30d-99f4-43e4-a922-42e766d8cbeb",
      "category": "Home",
      "name": "Cleaning Gizmo",
      "price": "125.99",
      "sale_price": "100.99",
      "subcategory": "Cleaning"
    },
    {
      "id": "f09140b6-0eb7-4326-882e-463099e60a7e",
      "category": "Health",
      "name": "First Aid Widget",
      "price": "174",
      "sale_price": "121",
      "subcategory": "First Aid"
    },
    {
      "id": "e064a45d-9f54-4677-9719-4f581334914a",
      "category": "Entertainment",
      "name": "Game Mechanism",
      "price": "122.99",
      "sale_price": "73.99",
      "subcategory": "Game"
    },
    {
      "id": "fe079aa3-f0a0-47f6-afd2-5a4a2d937cd4",
      "category": "Activity",
      "name": "Outdoors Thingamajig",
      "price": "179.99",
      "sale_price": "143.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "8e67d3a8-2a8e-445b-94b1-c4d5d17f6241",
      "category": "Electronics",
      "name": "Computer Apparatus",
      "price": "83",
      "sale_price": "58.99",
      "subcategory": "Computer"
    },
    {
      "id": "29f486b6-4d42-4309-a196-d73d439d1db3",
      "category": "Clothing",
      "name": "Baby Whatchamacallit",
      "price": "51.99",
      "sale_price": "40.99",
      "subcategory": "Baby"
    },
    {
      "id": "83e40bf8-12d0-49a7-bb87-f15513958dde",
      "category": "Electronics",
      "name": "Technology Doodad",
      "price": "25.99",
      "sale_price": "15",
      "subcategory": "Technology"
    },
    {
      "id": "81f6dca7-cab1-4da5-97c2-f79b4a933f3d",
      "category": "Activity",
      "name": "Swimming Paraphernalia",
      "price": "165",
      "sale_price": "132.95",
      "subcategory": "Swimming"
    },
    {
      "id": "77e827bb-9994-495f-90fa-666d36aa3f89",
      "category": "Home",
      "name": "Kitchen Kit",
      "price": "79",
      "sale_price": "63.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "ea7e8ec9-3b9d-4e05-9414-160c1e425ae3",
      "category": "Activity",
      "name": "Sports Paraphernalia",
      "price": "79.99",
      "sale_price": "63",
      "subcategory": "Sports"
    },
    {
      "id": "26cc9d80-30cc-4c28-ad45-c982352e751e",
      "category": "Entertainment",
      "name": "Book Device",
      "price": "13",
      "sale_price": "7",
      "subcategory": "Book"
    },
    {
      "id": "cf6f1cae-3aa3-4d46-955d-e9374c89deaa",
      "category": "Beauty",
      "name": "Makeup Contraption",
      "price": "126.99",
      "sale_price": "88.95",
      "subcategory": "Makeup"
    },
    {
      "id": "39d7c6f3-9e18-461b-ba8a-c4795c50eca1",
      "category": "Entertainment",
      "name": "Toy Instrument",
      "price": "54.95",
      "sale_price": "48.99",
      "subcategory": "Toy"
    },
    {
      "id": "7f1a3ade-18bf-4a2c-93de-f294a5f2f823",
      "category": "Home",
      "name": "Storage Attachment",
      "price": "160.99",
      "sale_price": "112",
      "subcategory": "Storage"
    },
    {
      "id": "bc5e624f-a19a-43ff-9998-131751276953",
      "category": "Home",
      "name": "Furniture Gear",
      "price": "164",
      "sale_price": "147.99",
      "subcategory": "Furniture"
    },
    {
      "id": "aedd82ae-abfa-4e6d-9b70-ae371cf4f33f",
      "category": "Home",
      "name": "Bedding Device",
      "price": "188.95",
      "sale_price": "131.95",
      "subcategory": "Bedding"
    },
    {
      "id": "56d4c9ae-7cf1-4a33-8df9-dc08983e59d1",
      "category": "Entertainment",
      "name": "Movie Kit",
      "price": "71",
      "sale_price": "63.99",
      "subcategory": "Movie"
    },
    {
      "id": "79fda55d-ad11-4b7f-8c87-653449f5865e",
      "category": "Activity",
      "name": "Biking Instrument",
      "price": "190.99",
      "sale_price": "114.95",
      "subcategory": "Biking"
    },
    {
      "id": "e869bea1-1b84-40a7-83e7-671a5e288a97",
      "category": "Entertainment",
      "name": "Party Supplies",
      "price": "153.99",
      "sale_price": "91.95",
      "subcategory": "Party"
    },
    {
      "id": "cf37abf3-ee60-4c24-bbdc-0b52d5411664",
      "category": "Clothing",
      "name": "Jewelry Kit",
      "price": "69.95",
      "sale_price": "62.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "77660742-b7d2-47c3-abc3-0808a246c451",
      "category": "Electronics",
      "name": "Camera Paraphernalia",
      "price": "193.99",
      "sale_price": "135.95",
      "subcategory": "Camera"
    },
    {
      "id": "f9ecd5f9-4ba7-4bec-a2c7-463507abdaf2",
      "category": "Automotive",
      "name": "Truck Kit",
      "price": "189.95",
      "sale_price": "170",
      "subcategory": "Truck"
    },
    {
      "id": "c9b50196-1b31-46ed-a965-72dc2d58fe57",
      "category": "Electronics",
      "name": "Computer Gear",
      "price": "22.95",
      "sale_price": "13",
      "subcategory": "Computer"
    },
    {
      "id": "c7eaed11-d57d-4825-9824-0ce0f5cdb7a2",
      "category": "Beauty",
      "name": "Hair Care Contraption",
      "price": "35",
      "sale_price": "31.99",
      "subcategory": "Hair Care"
    },
    {
      "id": "6297af19-1680-429b-9584-6ae74c3bf567",
      "category": "Entertainment",
      "name": "Book Contraption",
      "price": "35",
      "sale_price": "24",
      "subcategory": "Book"
    },
    {
      "id": "acc4490c-d83b-41fa-b21c-0d74eba4ee79",
      "category": "Clothing",
      "name": "Baby Rig",
      "price": "172",
      "sale_price": "103.95",
      "subcategory": "Baby"
    },
    {
      "id": "2f1db460-266e-4bfd-9c65-4bb6e99d51a1",
      "category": "Activity",
      "name": "Camping Widget",
      "price": "49.95",
      "sale_price": "29",
      "subcategory": "Camping"
    },
    {
      "id": "e677536a-3db3-423e-9c80-be8b57494290",
      "category": "Activity",
      "name": "Camping Accessory",
      "price": "198",
      "sale_price": "138.95",
      "subcategory": "Camping"
    },
    {
      "id": "9d7fe994-26a9-444b-b3c1-424e1dac171d",
      "category": "Automotive",
      "name": "Engine Implement",
      "price": "40.95",
      "sale_price": "24",
      "subcategory": "Engine"
    },
    {
      "id": "525cba0b-6c29-4ce6-939b-2c73d635e124",
      "category": "Home",
      "name": "Storage Machine",
      "price": "29.95",
      "sale_price": "17.95",
      "subcategory": "Storage"
    },
    {
      "id": "2340dbc4-d477-47e7-abc8-b10dd89855d8",
      "category": "Home",
      "name": "Bedding Whatchamacallit",
      "price": "88.99",
      "sale_price": "61",
      "subcategory": "Bedding"
    },
    {
      "id": "bc4b711c-73e1-4589-9580-b0ccd8e93d75",
      "category": "Electronics",
      "name": "Computer Apparatus",
      "price": "24.99",
      "sale_price": "14",
      "subcategory": "Computer"
    },
    {
      "id": "66a1cd0a-8111-40de-ac7f-fc9d762d9cb2",
      "category": "Activity",
      "name": "Fitness Rig",
      "price": "120.95",
      "sale_price": "84.99",
      "subcategory": "Fitness"
    },
    {
      "id": "2b12df19-e57a-4710-9b0b-c3a57c5672f2",
      "category": "Activity",
      "name": "Fitness Gizmo",
      "price": "73.95",
      "sale_price": "58",
      "subcategory": "Fitness"
    },
    {
      "id": "5c184f7c-09a5-4686-9752-7ff3252550d9",
      "category": "Clothing",
      "name": "Womens Gear",
      "price": "169",
      "sale_price": "152.95",
      "subcategory": "Womens"
    },
    {
      "id": "b6d16758-70d7-40eb-a645-be1650dc19a4",
      "category": "Clothing",
      "name": "Baby Contraption",
      "price": "54",
      "sale_price": "32",
      "subcategory": "Baby"
    },
    {
      "id": "f043c432-49e4-4008-9664-35a0bcb57a3f",
      "category": "Automotive",
      "name": "Tire Doodad",
      "price": "137.95",
      "sale_price": "95.99",
      "subcategory": "Tire"
    },
    {
      "id": "f208e3b4-daf1-41b8-87f8-2c3b12ee30aa",
      "category": "Home",
      "name": "Storage Equipment",
      "price": "152.99",
      "sale_price": "91.95",
      "subcategory": "Storage"
    },
    {
      "id": "c5f3c2b9-249e-4e7c-92fb-b59547a53546",
      "category": "Activity",
      "name": "Beach Machine",
      "price": "22.95",
      "sale_price": "19.95",
      "subcategory": "Beach"
    },
    {
      "id": "b58fdf1b-5c0c-438b-a940-87b2ce4587a8",
      "category": "Electronics",
      "name": "Camera Gadget",
      "price": "87.99",
      "sale_price": "69",
      "subcategory": "Camera"
    },
    {
      "id": "841ba9cd-c0ce-4d57-9933-c9c5645eca8a",
      "category": "Automotive",
      "name": "Engine Item",
      "price": "120.99",
      "sale_price": "96.99",
      "subcategory": "Engine"
    },
    {
      "id": "95b2e7d7-0bb2-425c-bcaa-6d796a25c73d",
      "category": "Health",
      "name": "Vitamin Paraphernalia",
      "price": "186",
      "sale_price": "130.99",
      "subcategory": "Vitamin"
    },
    {
      "id": "b8375191-5fe2-484d-be23-e6c1873ba352",
      "category": "Home",
      "name": "Dining Contraption",
      "price": "35",
      "sale_price": "24",
      "subcategory": "Dining"
    },
    {
      "id": "ff7c8db5-b145-4706-ad5a-32d068f43eab",
      "category": "Entertainment",
      "name": "Toy Mechanism",
      "price": "169.95",
      "sale_price": "152.99",
      "subcategory": "Toy"
    },
    {
      "id": "8ed20b51-c023-40a6-947c-4c0fc15a18f7",
      "category": "Activity",
      "name": "Swimming Paraphernalia",
      "price": "87.99",
      "sale_price": "69.95",
      "subcategory": "Swimming"
    },
    {
      "id": "199d26f3-690c-473a-86c1-1b0548eb0f88",
      "category": "Beauty",
      "name": "Bath Kit",
      "price": "49.95",
      "sale_price": "34.95",
      "subcategory": "Bath"
    },
    {
      "id": "5baf1655-14c8-4c8e-a4cc-ef490893a086",
      "category": "Activity",
      "name": "Sports Kit",
      "price": "107",
      "sale_price": "85.95",
      "subcategory": "Sports"
    },
    {
      "id": "461ee72f-346d-47f0-bb16-319f183b62dd",
      "category": "Electronics",
      "name": "Computer Instrument",
      "price": "28.95",
      "sale_price": "25.99",
      "subcategory": "Computer"
    },
    {
      "id": "0b7fb90a-cb25-49c3-b81a-17fcb5b1b3a6",
      "category": "Home",
      "name": "Home Improvement Device",
      "price": "103",
      "sale_price": "92.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "1e96ecf4-9078-4f51-8bfe-cd656208e6e4",
      "category": "Home",
      "name": "Storage Component",
      "price": "199.99",
      "sale_price": "119",
      "subcategory": "Storage"
    },
    {
      "id": "da668ea9-76d9-44c7-a851-4f124927e77a",
      "category": "Home",
      "name": "Dining Gadget",
      "price": "131.99",
      "sale_price": "104.99",
      "subcategory": "Dining"
    },
    {
      "id": "e642b17e-ba41-4678-9644-2fe1b66605c6",
      "category": "Beauty",
      "name": "Personal Apparatus",
      "price": "31",
      "sale_price": "27.95",
      "subcategory": "Personal"
    },
    {
      "id": "a4cc62f3-3520-4b5c-9071-48bb0446019c",
      "category": "Entertainment",
      "name": "Party Paraphernalia",
      "price": "11",
      "sale_price": "7.95",
      "subcategory": "Party"
    },
    {
      "id": "19a53593-a6ac-4c82-b8fc-59e1f1b8788b",
      "category": "Clothing",
      "name": "Kids Implement",
      "price": "166.95",
      "sale_price": "116.99",
      "subcategory": "Kids"
    },
    {
      "id": "6aedc4dd-ffcd-4c5e-a804-1af1748dd1e9",
      "category": "Activity",
      "name": "Swimming Paraphernalia",
      "price": "175",
      "sale_price": "157",
      "subcategory": "Swimming"
    },
    {
      "id": "0c020eb0-1c56-466a-b348-c720d84cfe19",
      "category": "Home",
      "name": "Cleaning Supplies",
      "price": "30.95",
      "sale_price": "24",
      "subcategory": "Cleaning"
    },
    {
      "id": "2390fb67-df81-4bd0-b642-6a774ed1e825",
      "category": "Electronics",
      "name": "Technology Item",
      "price": "34",
      "sale_price": "20.95",
      "subcategory": "Technology"
    },
    {
      "id": "6ceabad7-ef9c-4f37-b3fe-da57e3f38f27",
      "category": "Home",
      "name": "Cleaning Implement",
      "price": "73",
      "sale_price": "51",
      "subcategory": "Cleaning"
    },
    {
      "id": "03bffa95-5ec5-4553-8be7-e081a8f6d813",
      "category": "Home",
      "name": "Kitchen Kit",
      "price": "18",
      "sale_price": "14",
      "subcategory": "Kitchen"
    },
    {
      "id": "6c7519b0-e021-41fa-8c09-06e75614a185",
      "category": "Entertainment",
      "name": "Toy Gadget",
      "price": "86",
      "sale_price": "60",
      "subcategory": "Toy"
    },
    {
      "id": "f25d4ade-e67c-464d-8d09-2c7f40eb5560",
      "category": "Beauty",
      "name": "Bath Gadget",
      "price": "167",
      "sale_price": "100.99",
      "subcategory": "Bath"
    },
    {
      "id": "7b802586-abfe-45ff-94e2-2669ecec4a7c",
      "category": "Automotive",
      "name": "Tire Gadget",
      "price": "141",
      "sale_price": "126.95",
      "subcategory": "Tire"
    },
    {
      "id": "182c6185-7b45-4d35-ba2b-f9df4893b326",
      "category": "Home",
      "name": "Dining Attachment",
      "price": "182.99",
      "sale_price": "109.95",
      "subcategory": "Dining"
    },
    {
      "id": "416f7006-f680-4d6e-b294-52761a02aaba",
      "category": "Clothing",
      "name": "Mens Doodad",
      "price": "35.95",
      "sale_price": "31.95",
      "subcategory": "Mens"
    },
    {
      "id": "f4efa6b0-ec5b-41f0-8c77-4639bbd5a9ba",
      "category": "Automotive",
      "name": "Engine Doodad",
      "price": "41",
      "sale_price": "28",
      "subcategory": "Engine"
    },
    {
      "id": "0a1dce82-85b3-4c2e-acc2-3c4105f6738b",
      "category": "Home",
      "name": "Home Improvement Device",
      "price": "140.95",
      "sale_price": "84.99",
      "subcategory": "Home Improvement"
    },
    {
      "id": "ce3b390d-c3dc-43fe-a4f2-2ed7dde86f64",
      "category": "Health",
      "name": "First Aid Whatchamacallit",
      "price": "18",
      "sale_price": "14.99",
      "subcategory": "First Aid"
    },
    {
      "id": "51eea678-924a-49c8-a01e-f3ef0d2497f3",
      "category": "Electronics",
      "name": "Technology Paraphernalia",
      "price": "116.95",
      "sale_price": "69.95",
      "subcategory": "Technology"
    },
    {
      "id": "aee586f2-cd9f-4832-be06-fd7bca1a1400",
      "category": "Home",
      "name": "Storage Gizmo",
      "price": "180",
      "sale_price": "125.99",
      "subcategory": "Storage"
    },
    {
      "id": "17b1c994-e9b5-4119-a77f-4900aa974c63",
      "category": "Health",
      "name": "Medicine Rig",
      "price": "103.99",
      "sale_price": "61.95",
      "subcategory": "Medicine"
    },
    {
      "id": "788bca8e-e9a1-4ed1-90d7-e6ea94a6257a",
      "category": "Pets",
      "name": "Aquarium Contraption",
      "price": "135.99",
      "sale_price": "108",
      "subcategory": "Aquarium"
    },
    {
      "id": "502ab23f-d57f-4dc1-be26-2c3501caff2a",
      "category": "Activity",
      "name": "Swimming Equipment",
      "price": "118.99",
      "sale_price": "94.99",
      "subcategory": "Swimming"
    },
    {
      "id": "d7f83e46-88ad-4744-aa47-e4876a5c1e60",
      "category": "Home",
      "name": "Dining Widget",
      "price": "168.95",
      "sale_price": "117.95",
      "subcategory": "Dining"
    },
    {
      "id": "7cbe6629-2148-48d2-a381-6150502b012c",
      "category": "Automotive",
      "name": "Engine Mechanism",
      "price": "188",
      "sale_price": "131",
      "subcategory": "Engine"
    },
    {
      "id": "aecd239e-e763-4537-bf15-31ee6a57609e",
      "category": "Beauty",
      "name": "Bath Widget",
      "price": "65.95",
      "sale_price": "45",
      "subcategory": "Bath"
    },
    {
      "id": "991ca52a-c9d5-404a-87eb-6d7ee1570aa7",
      "category": "Clothing",
      "name": "Jewelry Gear",
      "price": "73",
      "sale_price": "65.95",
      "subcategory": "Jewelry"
    },
    {
      "id": "c5c714e0-8aac-463a-8a84-661123ccadc8",
      "category": "Beauty",
      "name": "Bath Supplies",
      "price": "121.95",
      "sale_price": "72",
      "subcategory": "Bath"
    },
    {
      "id": "76273229-ae1e-4c9c-a029-0d3d027aa1b6",
      "category": "Activity",
      "name": "Swimming Kit",
      "price": "79.99",
      "sale_price": "47",
      "subcategory": "Swimming"
    },
    {
      "id": "09be2903-aae9-4f40-a88f-a822f9a06b59",
      "category": "Clothing",
      "name": "Baby Gadget",
      "price": "127",
      "sale_price": "76.95",
      "subcategory": "Baby"
    },
    {
      "id": "2a6a401d-d857-43cc-a25f-a45c22c8f473",
      "category": "Health",
      "name": "Vitamin Widget",
      "price": "172.99",
      "sale_price": "154.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "d3bda2a5-d9be-4b8d-884d-b8a898eb9c03",
      "category": "Home",
      "name": "Cleaning Widget",
      "price": "81.99",
      "sale_price": "72.95",
      "subcategory": "Cleaning"
    },
    {
      "id": "2ba452e5-b990-4c6d-b342-ca9fbfa8d4e7",
      "category": "Automotive",
      "name": "Truck Paraphernalia",
      "price": "56",
      "sale_price": "39.95",
      "subcategory": "Truck"
    },
    {
      "id": "b3ff15b9-e537-4d5f-9642-b85cf08a50ac",
      "category": "Clothing",
      "name": "Mens Gadget",
      "price": "196.99",
      "sale_price": "117",
      "subcategory": "Mens"
    },
    {
      "id": "fbfc806f-4d77-4535-82f6-0f584070514b",
      "category": "Activity",
      "name": "Fitness Accessory",
      "price": "42.95",
      "sale_price": "25.95",
      "subcategory": "Fitness"
    },
    {
      "id": "2f18d181-5222-46dc-b87b-c98cca9c6162",
      "category": "Activity",
      "name": "Fitness Tool",
      "price": "76.95",
      "sale_price": "53.99",
      "subcategory": "Fitness"
    },
    {
      "id": "4522ff7f-f7b4-4c87-9a45-22f797bdfcf0",
      "category": "Entertainment",
      "name": "Toy Gadget",
      "price": "124",
      "sale_price": "74.99",
      "subcategory": "Toy"
    },
    {
      "id": "91ff47a4-58a0-4828-9c69-dd99b77180ef",
      "category": "Entertainment",
      "name": "Game Kit",
      "price": "97",
      "sale_price": "67.99",
      "subcategory": "Game"
    },
    {
      "id": "2a1eb3ac-7118-4243-9041-58ff5d46eb85",
      "category": "Automotive",
      "name": "Engine Device",
      "price": "93",
      "sale_price": "55.95",
      "subcategory": "Engine"
    },
    {
      "id": "30395561-f94a-48cd-93b0-73de73a19910",
      "category": "Activity",
      "name": "Outdoors Item",
      "price": "141.95",
      "sale_price": "112",
      "subcategory": "Outdoors"
    },
    {
      "id": "e871cdf0-0d7e-44d4-ad03-7f30b63807d0",
      "category": "Health",
      "name": "Vitamin Machine",
      "price": "179.95",
      "sale_price": "161",
      "subcategory": "Vitamin"
    },
    {
      "id": "c470a118-f4a5-4386-884e-5c8461802c81",
      "category": "Entertainment",
      "name": "Game Machine",
      "price": "76.99",
      "sale_price": "68.95",
      "subcategory": "Game"
    },
    {
      "id": "379cfe1f-eafb-4523-946b-a2cd4356fa08",
      "category": "Health",
      "name": "Nutrition Item",
      "price": "126.95",
      "sale_price": "100.99",
      "subcategory": "Nutrition"
    },
    {
      "id": "6fa92ffc-84e6-4ad0-81f2-dc162ba92e9d",
      "category": "Entertainment",
      "name": "Game Component",
      "price": "155.99",
      "sale_price": "139.99",
      "subcategory": "Game"
    },
    {
      "id": "707884e0-dda4-4bad-a600-865190d04bda",
      "category": "Beauty",
      "name": "Bath Implement",
      "price": "79.99",
      "sale_price": "55.95",
      "subcategory": "Bath"
    },
    {
      "id": "fb8bc9f4-ce57-408e-b9ed-ff8b45a49513",
      "category": "Electronics",
      "name": "Computer Whatchamacallit",
      "price": "121.99",
      "sale_price": "96",
      "subcategory": "Computer"
    },
    {
      "id": "5298dbe6-e794-4aca-83f4-d0719c789223",
      "category": "Home",
      "name": "Storage Whatchamacallit",
      "price": "63",
      "sale_price": "56.99",
      "subcategory": "Storage"
    },
    {
      "id": "a35d9f8a-8ab7-4af9-84cc-a4201ecbe0f0",
      "category": "Electronics",
      "name": "Computer Accessory",
      "price": "160.95",
      "sale_price": "112",
      "subcategory": "Computer"
    },
    {
      "id": "e444c885-8fab-4b7c-a7fa-e21dd1ba1e14",
      "category": "Pets",
      "name": "Aquarium Gear",
      "price": "27.99",
      "sale_price": "21",
      "subcategory": "Aquarium"
    },
    {
      "id": "50c5924e-f67b-4f50-bce6-419424354dd4",
      "category": "Home",
      "name": "Kitchen Rig",
      "price": "100",
      "sale_price": "60",
      "subcategory": "Kitchen"
    },
    {
      "id": "33e75dd2-6d76-448a-aec6-949413674b95",
      "category": "Pets",
      "name": "Cat Rig",
      "price": "113.99",
      "sale_price": "67",
      "subcategory": "Cat"
    },
    {
      "id": "183b0c9b-72af-40b1-a8d6-cbfbba106770",
      "category": "Health",
      "name": "Medicine Mechanism",
      "price": "137",
      "sale_price": "82.95",
      "subcategory": "Medicine"
    },
    {
      "id": "99525a84-00b0-4892-beb1-66425db3ca06",
      "category": "Electronics",
      "name": "Camera Kit",
      "price": "35",
      "sale_price": "31.99",
      "subcategory": "Camera"
    },
    {
      "id": "8545affd-168d-45bc-acef-650652053ea8",
      "category": "Clothing",
      "name": "Jewelry Supplies",
      "price": "126.95",
      "sale_price": "100.99",
      "subcategory": "Jewelry"
    },
    {
      "id": "b5aec6fa-bc5e-4c32-85c7-d9fbfd48408f",
      "category": "Health",
      "name": "Medicine Device",
      "price": "135.99",
      "sale_price": "81.99",
      "subcategory": "Medicine"
    },
    {
      "id": "1c6d3edb-7220-4595-a501-be9c46ecddd6",
      "category": "Activity",
      "name": "Camping Rig",
      "price": "101",
      "sale_price": "90.99",
      "subcategory": "Camping"
    },
    {
      "id": "2089ee6d-05e3-409f-acf3-4231393c4199",
      "category": "Home",
      "name": "Storage Mechanism",
      "price": "71.99",
      "sale_price": "56.99",
      "subcategory": "Storage"
    },
    {
      "id": "2207ec38-aa87-47c1-b583-0116cdc12a4b",
      "category": "Activity",
      "name": "Biking Widget",
      "price": "171.99",
      "sale_price": "153.95",
      "subcategory": "Biking"
    },
    {
      "id": "70b47afd-0a69-456f-9761-d13d3f1cc8f8",
      "category": "Health",
      "name": "Vitamin Kit",
      "price": "20",
      "sale_price": "14",
      "subcategory": "Vitamin"
    },
    {
      "id": "6aa14bbe-2f92-417f-950e-c7985c20f502",
      "category": "Home",
      "name": "Home Improvement Gadget",
      "price": "59.95",
      "sale_price": "47",
      "subcategory": "Home Improvement"
    },
    {
      "id": "4f38fade-d54a-435f-b241-2360c3c0996d",
      "category": "Clothing",
      "name": "Baby Component",
      "price": "74.99",
      "sale_price": "59.95",
      "subcategory": "Baby"
    },
    {
      "id": "5e0e80fa-3542-4b54-a384-76db1d98c871",
      "category": "Entertainment",
      "name": "Movie Accessory",
      "price": "83",
      "sale_price": "58.95",
      "subcategory": "Movie"
    },
    {
      "id": "c8bf4751-2910-4742-b4ae-621816034909",
      "category": "Automotive",
      "name": "Car Tool",
      "price": "16",
      "sale_price": "11.95",
      "subcategory": "Car"
    },
    {
      "id": "d8a7f82d-b240-4b3a-9f45-87756bcb6337",
      "category": "Beauty",
      "name": "Hair Care Gizmo",
      "price": "63.95",
      "sale_price": "44.95",
      "subcategory": "Hair Care"
    },
    {
      "id": "60ec6446-3508-4d93-8dfc-94cb635d6e18",
      "category": "Home",
      "name": "Dining Component",
      "price": "177",
      "sale_price": "141.99",
      "subcategory": "Dining"
    },
    {
      "id": "4b988226-1931-488c-aa28-125ab5718b9a",
      "category": "Electronics",
      "name": "Phone Device",
      "price": "127.95",
      "sale_price": "101",
      "subcategory": "Phone"
    },
    {
      "id": "c3691446-8d1b-4373-8f87-38ff5a62a604",
      "category": "Clothing",
      "name": "Kids Doodad",
      "price": "26.99",
      "sale_price": "18.95",
      "subcategory": "Kids"
    },
    {
      "id": "384fcc64-4947-43da-9205-45d46a37cfd5",
      "category": "Health",
      "name": "Vitamin Component",
      "price": "111.99",
      "sale_price": "88",
      "subcategory": "Vitamin"
    },
    {
      "id": "32b96d7f-9b5c-40dd-8d74-613e39abca11",
      "category": "Clothing",
      "name": "Kids Apparatus",
      "price": "30.99",
      "sale_price": "18.95",
      "subcategory": "Kids"
    },
    {
      "id": "642bc1b9-06e9-4f0f-8850-a1c9b0841e95",
      "category": "Activity",
      "name": "Biking Instrument",
      "price": "184.99",
      "sale_price": "147",
      "subcategory": "Biking"
    },
    {
      "id": "a0644205-e7e2-4859-bf41-73f02587a39f",
      "category": "Entertainment",
      "name": "Book Rig",
      "price": "169",
      "sale_price": "152.95",
      "subcategory": "Book"
    },
    {
      "id": "cd195050-77e2-4116-8630-8cfea5deb75e",
      "category": "Activity",
      "name": "Camping Gear",
      "price": "28",
      "sale_price": "25",
      "subcategory": "Camping"
    },
    {
      "id": "291c7976-642b-40e7-967c-71ff02d42c86",
      "category": "Automotive",
      "name": "Car Equipment",
      "price": "155",
      "sale_price": "139.95",
      "subcategory": "Car"
    },
    {
      "id": "5d112195-1979-4e56-a208-31236165e4f1",
      "category": "Beauty",
      "name": "Makeup Implement",
      "price": "57.95",
      "sale_price": "45.95",
      "subcategory": "Makeup"
    },
    {
      "id": "9e1008a4-a5a0-438b-9dc5-5bd594e25eaa",
      "category": "Home",
      "name": "Kitchen Gizmo",
      "price": "61.99",
      "sale_price": "48.95",
      "subcategory": "Kitchen"
    },
    {
      "id": "9055383d-ad13-468b-9183-911f49eddec9",
      "category": "Health",
      "name": "Vitamin Item",
      "price": "138",
      "sale_price": "82",
      "subcategory": "Vitamin"
    },
    {
      "id": "8fe660ea-312a-4a24-863b-4c7f61f06703",
      "category": "Home",
      "name": "Cooking Equipment",
      "price": "93.99",
      "sale_price": "65.99",
      "subcategory": "Cooking"
    },
    {
      "id": "82db413d-89db-4af4-bc42-bb6570e3098a",
      "category": "Electronics",
      "name": "Camera Tool",
      "price": "55.95",
      "sale_price": "38.99",
      "subcategory": "Camera"
    },
    {
      "id": "8013a896-d4d6-45a8-9250-270e89c76fba",
      "category": "Home",
      "name": "Gardening Doodad",
      "price": "171.99",
      "sale_price": "153.95",
      "subcategory": "Gardening"
    },
    {
      "id": "e9b66449-3168-4ffb-873c-96cbda9d6138",
      "category": "Beauty",
      "name": "Makeup Doodad",
      "price": "129",
      "sale_price": "90.99",
      "subcategory": "Makeup"
    },
    {
      "id": "df35d2a2-854e-4930-90f8-89ff2625ed8d",
      "category": "Activity",
      "name": "Sports Supplies",
      "price": "189.95",
      "sale_price": "113.95",
      "subcategory": "Sports"
    },
    {
      "id": "6afafb07-ceb9-4458-8916-4d3de7f11137",
      "category": "Health",
      "name": "Medicine Component",
      "price": "38.99",
      "sale_price": "34.95",
      "subcategory": "Medicine"
    },
    {
      "id": "140a2bce-ba1a-43e8-8a38-d9604c754f41",
      "category": "Activity",
      "name": "Camping Gear",
      "price": "81.95",
      "sale_price": "48",
      "subcategory": "Camping"
    },
    {
      "id": "78e1920a-8ce6-44e2-9829-263148faa76f",
      "category": "Beauty",
      "name": "Personal Machine",
      "price": "15.95",
      "sale_price": "10",
      "subcategory": "Personal"
    },
    {
      "id": "4225da4a-a922-463a-9b22-c7e71034a529",
      "category": "Home",
      "name": "Furniture Device",
      "price": "174.99",
      "sale_price": "139",
      "subcategory": "Furniture"
    },
    {
      "id": "e21eb5ac-e896-40ce-a8f9-95eba7f71de0",
      "category": "Activity",
      "name": "Fitness Instrument",
      "price": "162.95",
      "sale_price": "145",
      "subcategory": "Fitness"
    },
    {
      "id": "de093bf7-e599-4a0b-8016-20357a6422ef",
      "category": "Automotive",
      "name": "Engine Component",
      "price": "72.95",
      "sale_price": "50",
      "subcategory": "Engine"
    },
    {
      "id": "513f3484-e958-4d88-a6f4-86c0eb5d5fc9",
      "category": "Entertainment",
      "name": "Game Instrument",
      "price": "167.99",
      "sale_price": "116.99",
      "subcategory": "Game"
    },
    {
      "id": "34bd953a-664f-4551-8472-289b07ab43a8",
      "category": "Health",
      "name": "First Aid Attachment",
      "price": "69.95",
      "sale_price": "62.95",
      "subcategory": "First Aid"
    },
    {
      "id": "393088dd-bd1a-4952-bcf8-600d89a28215",
      "category": "Clothing",
      "name": "Baby Equipment",
      "price": "138.99",
      "sale_price": "110",
      "subcategory": "Baby"
    },
    {
      "id": "be2c2b39-77fe-4ea6-aa92-c6bb71cac510",
      "category": "Electronics",
      "name": "Camera Kit",
      "price": "111",
      "sale_price": "66.95",
      "subcategory": "Camera"
    },
    {
      "id": "a5a4ec16-a3fa-4dd5-befa-f4b1107318dc",
      "category": "Entertainment",
      "name": "Movie Implement",
      "price": "63.99",
      "sale_price": "50.99",
      "subcategory": "Movie"
    },
    {
      "id": "47d87d82-dcec-47c5-8c16-ed48053527a4",
      "category": "Pets",
      "name": "Aquarium Tool",
      "price": "94",
      "sale_price": "84",
      "subcategory": "Aquarium"
    },
    {
      "id": "56320e4f-b4ad-4252-9991-cd38af4f9222",
      "category": "Automotive",
      "name": "Tire Rig",
      "price": "93",
      "sale_price": "83.99",
      "subcategory": "Tire"
    },
    {
      "id": "8e55b41b-58c1-4cd7-8aac-a77eb152204d",
      "category": "Home",
      "name": "Dining Gadget",
      "price": "25.95",
      "sale_price": "17.99",
      "subcategory": "Dining"
    },
    {
      "id": "7f696cc2-31fa-485b-9e5c-d7405ddf68f7",
      "category": "Home",
      "name": "Furniture Supplies",
      "price": "16.95",
      "sale_price": "9.99",
      "subcategory": "Furniture"
    },
    {
      "id": "d327056b-1443-4bbb-8b52-cdd80121eabd",
      "category": "Entertainment",
      "name": "Party Widget",
      "price": "87",
      "sale_price": "69",
      "subcategory": "Party"
    },
    {
      "id": "96bb0dbc-ee83-49cb-bff4-a966b34a8322",
      "category": "Beauty",
      "name": "Makeup Component",
      "price": "92.99",
      "sale_price": "55.95",
      "subcategory": "Makeup"
    },
    {
      "id": "3e940d83-7e45-4835-9187-5fb7edd2335c",
      "category": "Health",
      "name": "Medicine Rig",
      "price": "77",
      "sale_price": "53.99",
      "subcategory": "Medicine"
    },
    {
      "id": "e62a2bf3-922a-45fa-95d9-55f13065bf7d",
      "category": "Entertainment",
      "name": "Game Item",
      "price": "154",
      "sale_price": "92.99",
      "subcategory": "Game"
    },
    {
      "id": "d54832e0-f492-4844-aa6d-0e92c7b49a93",
      "category": "Health",
      "name": "Medicine Gizmo",
      "price": "12.99",
      "sale_price": "9",
      "subcategory": "Medicine"
    },
    {
      "id": "0490cd18-d0ae-4261-a096-0a1980bd2697",
      "category": "Health",
      "name": "Vitamin Gizmo",
      "price": "24.95",
      "sale_price": "21.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "6e1da7fe-81a2-4562-b6c8-070a87a94789",
      "category": "Entertainment",
      "name": "Party Supplies",
      "price": "167",
      "sale_price": "116.99",
      "subcategory": "Party"
    },
    {
      "id": "2116e32a-0e44-4e37-870a-443435b8c40b",
      "category": "Activity",
      "name": "Fitness Gizmo",
      "price": "64",
      "sale_price": "51.95",
      "subcategory": "Fitness"
    },
    {
      "id": "fa3efbce-1a94-4e73-956c-309d20bb1017",
      "category": "Entertainment",
      "name": "Movie Machine",
      "price": "94.95",
      "sale_price": "75.95",
      "subcategory": "Movie"
    },
    {
      "id": "1e4e71b7-9370-4efe-9329-5f8e8a4b73c6",
      "category": "Beauty",
      "name": "Skin Care Equipment",
      "price": "60",
      "sale_price": "36.99",
      "subcategory": "Skin Care"
    },
    {
      "id": "bdc38365-f543-479f-b854-b10de4507995",
      "category": "Electronics",
      "name": "Computer Paraphernalia",
      "price": "117",
      "sale_price": "93.99",
      "subcategory": "Computer"
    },
    {
      "id": "f682fee2-b6bb-4e3d-aaed-a1ded4f20a26",
      "category": "Home",
      "name": "Home Improvement Gear",
      "price": "84",
      "sale_price": "67",
      "subcategory": "Home Improvement"
    },
    {
      "id": "5397e6a9-4046-40b0-bb60-533096b168e0",
      "category": "Automotive",
      "name": "Tire Instrument",
      "price": "153.99",
      "sale_price": "91.99",
      "subcategory": "Tire"
    },
    {
      "id": "b50f19cd-7c28-4b89-8f40-7a5841acbe66",
      "category": "Entertainment",
      "name": "Toy Rig",
      "price": "159.95",
      "sale_price": "143.95",
      "subcategory": "Toy"
    },
    {
      "id": "d9698ee2-6d5f-47fa-b060-713d94f22aed",
      "category": "Home",
      "name": "Gardening Component",
      "price": "172",
      "sale_price": "120.95",
      "subcategory": "Gardening"
    },
    {
      "id": "1ab34fa0-aee3-45b7-82ba-1d2fbc4b541f",
      "category": "Home",
      "name": "Storage Kit",
      "price": "163",
      "sale_price": "114",
      "subcategory": "Storage"
    },
    {
      "id": "140e9281-f485-4b23-949a-ef1736a9ceb8",
      "category": "Home",
      "name": "Gardening Equipment",
      "price": "106",
      "sale_price": "95.99",
      "subcategory": "Gardening"
    },
    {
      "id": "69616fe5-8486-4d8e-8277-7adb0db305c7",
      "category": "Activity",
      "name": "Sports Component",
      "price": "133",
      "sale_price": "119.99",
      "subcategory": "Sports"
    },
    {
      "id": "56395874-c3dc-4674-b697-f8921e0a4095",
      "category": "Activity",
      "name": "Sports Instrument",
      "price": "65.95",
      "sale_price": "52.99",
      "subcategory": "Sports"
    },
    {
      "id": "ed329960-3137-4d48-b375-9b42a360d0bd",
      "category": "Electronics",
      "name": "Camera Gear",
      "price": "51.99",
      "sale_price": "45.99",
      "subcategory": "Camera"
    },
    {
      "id": "176d71ff-1c83-4eee-b111-fa52614d91a7",
      "category": "Health",
      "name": "Vitamin Widget",
      "price": "28",
      "sale_price": "16.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "8f3d2970-2965-4023-a81b-9116bb1d50d1",
      "category": "Beauty",
      "name": "Hair Care Attachment",
      "price": "154.99",
      "sale_price": "123",
      "subcategory": "Hair Care"
    },
    {
      "id": "70d1f502-f814-4469-937f-37c5aee584bd",
      "category": "Home",
      "name": "Storage Implement",
      "price": "198",
      "sale_price": "158",
      "subcategory": "Storage"
    },
    {
      "id": "7044fa11-58cd-4262-9965-89c27e3415b4",
      "category": "Home",
      "name": "Gardening Contraption",
      "price": "25.95",
      "sale_price": "22.95",
      "subcategory": "Gardening"
    },
    {
      "id": "ae313572-351a-4375-9890-2d8abc0113a7",
      "category": "Home",
      "name": "Cooking Gear",
      "price": "164",
      "sale_price": "147.99",
      "subcategory": "Cooking"
    },
    {
      "id": "801b6c2f-5642-4127-a92d-991f325d36b6",
      "category": "Clothing",
      "name": "Womens Instrument",
      "price": "28",
      "sale_price": "25",
      "subcategory": "Womens"
    },
    {
      "id": "d4498b2e-8f14-41e3-a8b0-ca84c0262bba",
      "category": "Activity",
      "name": "Fitness Device",
      "price": "30.99",
      "sale_price": "18",
      "subcategory": "Fitness"
    },
    {
      "id": "37793e04-2e77-46cf-9156-44608b58860b",
      "category": "Pets",
      "name": "Aquarium Device",
      "price": "45.99",
      "sale_price": "31.95",
      "subcategory": "Aquarium"
    },
    {
      "id": "b777148e-3f9d-4ba6-a730-0067bb5ac089",
      "category": "Home",
      "name": "Cooking Paraphernalia",
      "price": "159",
      "sale_price": "111.95",
      "subcategory": "Cooking"
    },
    {
      "id": "97c4ffb8-17ab-4ab5-b84d-2a5e4ac3fe7b",
      "category": "Activity",
      "name": "Outdoors Apparatus",
      "price": "43",
      "sale_price": "34.95",
      "subcategory": "Outdoors"
    },
    {
      "id": "7b4704d3-2e3c-44c8-b956-6a6122449ef5",
      "category": "Home",
      "name": "Storage Equipment",
      "price": "63",
      "sale_price": "50.99",
      "subcategory": "Storage"
    },
    {
      "id": "c7d44903-85c6-482d-a159-942e371e7e32",
      "category": "Electronics",
      "name": "Technology Attachment",
      "price": "159",
      "sale_price": "111",
      "subcategory": "Technology"
    },
    {
      "id": "26820b80-816d-411f-baff-3f09497391e8",
      "category": "Home",
      "name": "Gardening Kit",
      "price": "188",
      "sale_price": "112.99",
      "subcategory": "Gardening"
    },
    {
      "id": "1381e61d-0dfc-4737-985a-e0065daaf1cc",
      "category": "Clothing",
      "name": "Kids Device",
      "price": "10",
      "sale_price": "6",
      "subcategory": "Kids"
    },
    {
      "id": "19a882bb-4313-4868-9a27-3bcc70e32e66",
      "category": "Automotive",
      "name": "Car Device",
      "price": "180",
      "sale_price": "108",
      "subcategory": "Car"
    },
    {
      "id": "1963b770-0ffd-47d4-a378-9081bcaed353",
      "category": "Home",
      "name": "Cleaning Gizmo",
      "price": "44.99",
      "sale_price": "26",
      "subcategory": "Cleaning"
    },
    {
      "id": "4af2c510-bfc1-4587-8b84-b9b86a784e73",
      "category": "Activity",
      "name": "Camping Paraphernalia",
      "price": "97",
      "sale_price": "77.99",
      "subcategory": "Camping"
    },
    {
      "id": "b405e808-2154-4a47-814d-b2ff9bdf7c69",
      "category": "Pets",
      "name": "Cat Apparatus",
      "price": "174",
      "sale_price": "121.95",
      "subcategory": "Cat"
    },
    {
      "id": "d9d57dd4-9793-464c-a564-bd0630fce296",
      "category": "Automotive",
      "name": "Car Doodad",
      "price": "114",
      "sale_price": "91.99",
      "subcategory": "Car"
    },
    {
      "id": "93a7a340-1e83-4436-a6e1-1d1748520d91",
      "category": "Beauty",
      "name": "Personal Component",
      "price": "52.99",
      "sale_price": "46.99",
      "subcategory": "Personal"
    },
    {
      "id": "c3048221-483c-4df4-af10-820255545111",
      "category": "Activity",
      "name": "Beach Accessory",
      "price": "150.99",
      "sale_price": "120.99",
      "subcategory": "Beach"
    },
    {
      "id": "20ab80ca-bac8-4355-a17c-29452a9f3b6b",
      "category": "Health",
      "name": "Medicine Implement",
      "price": "22",
      "sale_price": "15.99",
      "subcategory": "Medicine"
    },
    {
      "id": "fbb1e6ff-590c-4dfa-a4ca-a3673aa82e2f",
      "category": "Beauty",
      "name": "Makeup Accessory",
      "price": "32.99",
      "sale_price": "25",
      "subcategory": "Makeup"
    },
    {
      "id": "536b2836-7e4e-462f-bc2a-2d16a95014e5",
      "category": "Activity",
      "name": "Fitness Equipment",
      "price": "176",
      "sale_price": "123",
      "subcategory": "Fitness"
    },
    {
      "id": "38fe4046-3d41-4950-b6ac-a236423a95c7",
      "category": "Entertainment",
      "name": "Party Thingamajig",
      "price": "150",
      "sale_price": "120",
      "subcategory": "Party"
    },
    {
      "id": "9e506c4f-543e-4c65-b82b-f4005e850c72",
      "category": "Automotive",
      "name": "Car Device",
      "price": "40.99",
      "sale_price": "24.99",
      "subcategory": "Car"
    },
    {
      "id": "34e61bec-2d6e-4fe4-9bd4-6d65c8722472",
      "category": "Home",
      "name": "Gardening Component",
      "price": "47",
      "sale_price": "37.99",
      "subcategory": "Gardening"
    },
    {
      "id": "5e59befb-1105-4bda-bdcf-e10e399b2296",
      "category": "Home",
      "name": "Furniture Contraption",
      "price": "130.99",
      "sale_price": "91.99",
      "subcategory": "Furniture"
    },
    {
      "id": "30f67483-94d7-4b28-be63-5c352e66cf12",
      "category": "Health",
      "name": "Nutrition Widget",
      "price": "63.95",
      "sale_price": "56.95",
      "subcategory": "Nutrition"
    },
    {
      "id": "6e148cc7-5263-4bbf-994f-e45980bc39c3",
      "category": "Health",
      "name": "Vitamin Doodad",
      "price": "42.95",
      "sale_price": "37.95",
      "subcategory": "Vitamin"
    },
    {
      "id": "c416d2b5-8dc3-432a-8934-3e9f50104b10",
      "category": "Automotive",
      "name": "Truck Rig",
      "price": "191",
      "sale_price": "171.95",
      "subcategory": "Truck"
    },
    {
      "id": "a6876934-25ea-4f25-a0d8-dce2451a6388",
      "category": "Clothing",
      "name": "Baby Gadget",
      "price": "25.99",
      "sale_price": "20",
      "subcategory": "Baby"
    },
    {
      "id": "dfd824df-51a1-47d7-a98c-f08c7408c1e0",
      "category": "Entertainment",
      "name": "Book Paraphernalia",
      "price": "102.99",
      "sale_price": "91.99",
      "subcategory": "Book"
    },
    {
      "id": "f8d9817c-fff0-4676-918d-27a708a37b55",
      "category": "Activity",
      "name": "Beach Attachment",
      "price": "197.99",
      "sale_price": "118.95",
      "subcategory": "Beach"
    },
    {
      "id": "47a556a6-b3c0-462d-9391-f904fb90a773",
      "category": "Electronics",
      "name": "Computer Doodad",
      "price": "37.99",
      "sale_price": "25.95",
      "subcategory": "Computer"
    },
    {
      "id": "90d6d2eb-e7e0-4a96-8cd0-0427acf4199b",
      "category": "Home",
      "name": "Gardening Component",
      "price": "39",
      "sale_price": "31",
      "subcategory": "Gardening"
    },
    {
      "id": "f4e4fcf9-8856-4d49-a9a7-bc341ad77d70",
      "category": "Home",
      "name": "Gardening Gear",
      "price": "181.95",
      "sale_price": "126",
      "subcategory": "Gardening"
    },
    {
      "id": "aab74927-6a24-43a8-8592-e46807a55c95",
      "category": "Entertainment",
      "name": "Toy Apparatus",
      "price": "105.95",
      "sale_price": "94.95",
      "subcategory": "Toy"
    },
    {
      "id": "88034988-0f46-4801-85c4-e074014e9528",
      "category": "Home",
      "name": "Kitchen Whatchamacallit",
      "price": "195",
      "sale_price": "156",
      "subcategory": "Kitchen"
    },
    {
      "id": "e8128278-245d-4bef-a969-d593b29c76a9",
      "category": "Beauty",
      "name": "Skin Care Gadget",
      "price": "107.95",
      "sale_price": "96.99",
      "subcategory": "Skin Care"
    }
  ];
}
