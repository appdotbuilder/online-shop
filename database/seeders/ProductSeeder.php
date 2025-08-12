<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create sample products
        $products = [
            [
                'name' => 'Smartphone Premium',
                'description' => 'Smartphone terbaru dengan kamera canggih dan performa tinggi. Dilengkapi dengan layar OLED 6.7 inch dan baterai 5000mAh.',
                'price' => 8999000,
                'image_url' => 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
                'stock' => 25,
                'status' => 'active',
            ],
            [
                'name' => 'Laptop Gaming',
                'description' => 'Laptop gaming dengan processor Intel i7, RAM 16GB, dan VGA RTX 4060. Cocok untuk gaming dan editing.',
                'price' => 15999000,
                'image_url' => 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=400&fit=crop',
                'stock' => 15,
                'status' => 'active',
            ],
            [
                'name' => 'Headset Wireless',
                'description' => 'Headset wireless dengan noise cancelling dan kualitas audio premium. Baterai tahan hingga 30 jam.',
                'price' => 1299000,
                'image_url' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
                'stock' => 40,
                'status' => 'active',
            ],
            [
                'name' => 'Smartwatch Sport',
                'description' => 'Smartwatch dengan fitur tracking olahraga, monitor kesehatan, dan tahan air. Baterai 7 hari.',
                'price' => 2599000,
                'image_url' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
                'stock' => 30,
                'status' => 'active',
            ],
            [
                'name' => 'Kamera DSLR',
                'description' => 'Kamera DSLR profesional dengan lensa kit 18-55mm. Sensor APS-C 24MP dan video 4K.',
                'price' => 7899000,
                'image_url' => 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
                'stock' => 12,
                'status' => 'active',
            ],
            [
                'name' => 'Tablet Pro',
                'description' => 'Tablet dengan stylus pen untuk produktivitas dan kreativitas. Layar 12.9 inch dengan teknologi Liquid Retina.',
                'price' => 11999000,
                'image_url' => 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
                'stock' => 20,
                'status' => 'active',
            ],
            [
                'name' => 'Speaker Bluetooth',
                'description' => 'Speaker portable dengan kualitas suara jernih dan bass mendalam. Tahan air IPX7.',
                'price' => 899000,
                'image_url' => 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
                'stock' => 35,
                'status' => 'active',
            ],
            [
                'name' => 'Mouse Gaming',
                'description' => 'Mouse gaming dengan sensor presisi tinggi dan RGB lighting. Ergonomis untuk gaming marathon.',
                'price' => 599000,
                'image_url' => 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
                'stock' => 50,
                'status' => 'active',
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }

        // Create additional random products
        Product::factory(20)->create();
    }
}