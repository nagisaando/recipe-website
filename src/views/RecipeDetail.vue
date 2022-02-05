<template>
  <div class="px-5 my-40 | container mx-auto">
    <h1 class="text-5xl font-bold">{{ recipeData.title }}</h1>
    <ul v-if="recipeData.diets.length > 0" class="my-5 | flex flex-wrap gap-3">
      <li
        v-for="(item, i) in recipeData.diets"
        :key="i"
        class="border-2 border-orange | py-1 px-2 | rounded-lg"
      >
        {{ item }}
      </li>
    </ul>
    <img :src="recipeData.image" :alt="recipeData.title" />
    <p v-html="recipeData.summary" class="mt-10"></p>
    <hr class="my-16" />
    <h2 class="text-2xl font-semibold">Ingredients:</h2>
    <ul class="list-disc ml-5 mt-5">
      <li v-for="(el, i) in recipeData.extendedIngredients" :key="i" class="my-2">
        {{ `${el.amount} ${el.unit} ${el.name}` }}
      </li>
    </ul>
    <hr class="my-16" />
    <h2 class="text-2xl font-semibold">instructions:</h2>
    <ol class="list-decimal | ml-5 mt-5">
      <li v-for="(el, i) in recipeData.analyzedInstructions[0].steps" :key="i" class="my-2">
        {{ el.step }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetail',
  data() {
    return {
      recipeData: {
        vegetarian: false,
        vegan: false,
        glutenFree: true,
        dairyFree: false,
        veryHealthy: true,
        cheap: false,
        veryPopular: false,
        sustainable: false,
        weightWatcherSmartPoints: 10,
        gaps: 'no',
        lowFodmap: false,
        aggregateLikes: 12,
        spoonacularScore: 93.0,
        healthScore: 65.0,
        creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
        license: 'CC BY 3.0',
        sourceName: 'Foodista',
        pricePerServing: 300.93,
        extendedIngredients: [
          {
            id: 43015,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'coleslaw-or-caesar-dressing.jpg',
            consistency: 'liquid',
            name: 'caesar dressing',
            nameClean: 'caesar salad dressing',
            original: '2 tablespoons light caesar dressing',
            originalName: 'light caesar dressing',
            amount: 2.0,
            unit: 'tablespoons',
            meta: ['light'],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
            },
          },
          {
            id: 9152,
            aisle: 'Produce',
            image: 'lemon-juice.jpg',
            consistency: 'liquid',
            name: 'lemon juice',
            nameClean: 'lemon juice',
            original: '2 tablespoons freshly squeezed lemon juice',
            originalName: 'freshly squeezed lemon juice',
            amount: 2.0,
            unit: 'tablespoons',
            meta: ['freshly squeezed'],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
              metric: {
                amount: 2.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
            },
          },
          {
            id: 4053,
            aisle: 'Oil, Vinegar, Salad Dressing',
            image: 'olive-oil.jpg',
            consistency: 'liquid',
            name: 'olive oil',
            nameClean: 'olive oil',
            original: '1 tablespoon Olive oil',
            originalName: 'Olive oil',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp',
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp',
              },
            },
          },
          {
            id: 2028,
            aisle: 'Spices and Seasonings',
            image: 'paprika.jpg',
            consistency: 'solid',
            name: 'paprika',
            nameClean: 'paprika',
            original: '1/4 teaspoon paprika',
            originalName: 'paprika',
            amount: 0.25,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons',
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons',
              },
            },
          },
          {
            id: 1033,
            aisle: 'Cheese',
            image: 'parmesan.jpg',
            consistency: 'solid',
            name: 'parmesan cheese',
            nameClean: 'parmesan',
            original: '8 tablespoons Parmesan cheese, shredded',
            originalName: 'Parmesan cheese, shredded',
            amount: 8.0,
            unit: 'tablespoons',
            meta: ['shredded'],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
              metric: {
                amount: 8.0,
                unitShort: 'Tbsps',
                unitLong: 'Tbsps',
              },
            },
          },
          {
            id: 1002030,
            aisle: 'Spices and Seasonings',
            image: 'pepper.jpg',
            consistency: 'solid',
            name: 'pepper',
            nameClean: 'black pepper',
            original: 'add black pepper to taste',
            originalName: 'add black pepper to taste',
            amount: 2.0,
            unit: 'servings',
            meta: ['black', 'to taste'],
            measures: {
              us: {
                amount: 2.0,
                unitShort: 'servings',
                unitLong: 'servings',
              },
              metric: {
                amount: 2.0,
                unitShort: 'servings',
                unitLong: 'servings',
              },
            },
          },
          {
            id: 10111251,
            aisle: 'Produce',
            image: 'romaine.jpg',
            consistency: 'solid',
            name: 'romaine',
            nameClean: 'romaine',
            original: '1 8 oz head of Romaine',
            originalName: 'Romaine',
            amount: 8.0,
            unit: 'oz',
            meta: [],
            measures: {
              us: {
                amount: 8.0,
                unitShort: 'oz',
                unitLong: 'ounces',
              },
              metric: {
                amount: 226.796,
                unitShort: 'g',
                unitLong: 'grams',
              },
            },
          },
          {
            id: 15076,
            aisle: 'Seafood',
            image: 'salmon.png',
            consistency: 'solid',
            name: 'salmon fillet',
            nameClean: 'salmon',
            original: '6 ounces Salmon fillet',
            originalName: 'Salmon fillet',
            amount: 6.0,
            unit: 'ounces',
            meta: [],
            measures: {
              us: {
                amount: 6.0,
                unitShort: 'oz',
                unitLong: 'ounces',
              },
              metric: {
                amount: 170.097,
                unitShort: 'g',
                unitLong: 'grams',
              },
            },
          },
          {
            id: 2047,
            aisle: 'Spices and Seasonings',
            image: 'salt.jpg',
            consistency: 'solid',
            name: 'salt',
            nameClean: 'salt',
            original: '1/4 teaspoon salt',
            originalName: 'salt',
            amount: 0.25,
            unit: 'teaspoon',
            meta: [],
            measures: {
              us: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons',
              },
              metric: {
                amount: 0.25,
                unitShort: 'tsps',
                unitLong: 'teaspoons',
              },
            },
          },
          {
            id: 10012061,
            aisle: 'Baking',
            image: 'almonds-slivered.png',
            consistency: 'solid',
            name: 'slivered almonds',
            nameClean: 'slivered almonds',
            original: '1 tablespoon slivered almonds',
            originalName: 'slivered almonds',
            amount: 1.0,
            unit: 'tablespoon',
            meta: [],
            measures: {
              us: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp',
              },
              metric: {
                amount: 1.0,
                unitShort: 'Tbsp',
                unitLong: 'Tbsp',
              },
            },
          },
        ],
        id: 646512,
        title: 'Salmon Caesar Salad',
        readyInMinutes: 45,
        servings: 2,
        sourceUrl: 'http://www.foodista.com/recipe/36WZD7DS/healthy-salmon-caesar-salad-recipe',
        image: 'https://spoonacular.com/recipeImages/646512-556x370.jpg',
        imageType: 'jpg',
        summary:
          'Salmon Caesar Salad might be just the main course you are searching for. This gluten free, primal, fodmap friendly, and pescatarian recipe serves 2 and costs <b>$3.01 per serving</b>. One serving contains <b>393 calories</b>, <b>27g of protein</b>, and <b>29g of fat</b>. Only a few people made this recipe, and 7 would say it hit the spot. A mixture of caesar dressing, romaine, slivered almonds, and a handful of other ingredients are all it takes to make this recipe so delicious. To use up the salt you could follow this main course with the <a href="https://spoonacular.com/recipes/apple-turnovers-recipe-48175">Apple Turnovers Recipe</a> as a dessert. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe is typical of American cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 92%</b>. This score is excellent. Try <a href="https://spoonacular.com/recipes/salmon-caesar-salad-521731">Salmon Caesar Salad</a>, <a href="https://spoonacular.com/recipes/salmon-caesar-salad-418441">Salmon Caesar Salad</a>, and <a href="https://spoonacular.com/recipes/salmon-caesar-salad-277721">Salmon Caesar Salad</a> for similar recipes.',
        cuisines: ['American'],
        dishTypes: ['salad'],
        diets: ['gluten free', 'pescatarian'],
        occasions: [],
        winePairing: {
          pairedWines: ['chardonnay', 'pinot noir', 'sauvignon blanc'],
          pairingText:
            'Salmon on the menu? Try pairing with Chardonnay, Pinot Noir, and Sauvignon Blanc. To decide on white or red, you should consider your seasoning and sauces. Chardonnay is a great friend to buttery, creamy dishes, while sauvignon blanc can complement herb or citrus-centric dishes. A light-bodied, low-tannin red such as the pinot noir goes great with broiled or grilled salmon. The Lapis Luna Chardonnay with a 4.7 out of 5 star rating seems like a good match. It costs about 13 dollars per bottle.',
          productMatches: [
            {
              id: 485260,
              title: 'Lapis Luna Chardonnay',
              description:
                'Orange zest, ripe pineapple, toast, and vanilla on the nose. Full-bodied, fresh and lively, with lush white peach and ripe apple flavors leading to a savory buttered finish.',
              price: '$12.99',
              imageUrl: 'https://spoonacular.com/productImages/485260-312x231.jpg',
              averageRating: 0.9400000000000001,
              ratingCount: 15.0,
              score: 0.9182608695652175,
              link: 'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Flapis-luna-chardonnay-2018%2F578331',
            },
          ],
        },
        instructions:
          "<ol><li>Directions: Heat up a skillet/frying pan and sir the Salmon in the coconut oil/olive oil (don't forget to add the salt and paprika to it) until very lightly browned on each side (i like my salmon slightly undercooked-its up to you if you want it more done). Top with freshly squeezed lemon juice and let it sit in the frying pan for about 1 minute. In a Large bowl, mix the romaine lettuce with the Caesar salad dressing and dump it out into a large plate, top off with Asiago/Parmesan cheese and you can also sprinkle the toasted almonds on now. Place the Salmon (sliced) on top. You can sprinkle it with some more fresh lemon juice:) and black pepper!</li></ol>",
        analyzedInstructions: [
          {
            name: '',
            steps: [
              {
                number: 1,
                step: "Heat up a skillet/frying pan and sir the Salmon in the coconut oil/olive oil (don't forget to add the salt and paprika to it) until very lightly browned on each side (i like my salmon slightly undercooked-its up to you if you want it more done). Top with freshly squeezed lemon juice and let it sit in the frying pan for about 1 minute. In a Large bowl, mix the romaine lettuce with the Caesar salad dressing and dump it out into a large plate, top off with Asiago/Parmesan cheese and you can also sprinkle the toasted almonds on now.",
                ingredients: [
                  {
                    id: 43015,
                    name: 'caesar salad dressing',
                    localizedName: 'caesar salad dressing',
                    image: 'coleslaw-or-caesar-dressing.jpg',
                  },
                  {
                    id: 1033,
                    name: 'parmesan',
                    localizedName: 'parmesan',
                    image: 'parmesan.jpg',
                  },
                  {
                    id: 10111251,
                    name: 'romaine',
                    localizedName: 'romaine',
                    image: 'romaine',
                  },
                  {
                    id: 4047,
                    name: 'coconut oil',
                    localizedName: 'coconut oil',
                    image: 'oil-coconut.jpg',
                  },
                  {
                    id: 9152,
                    name: 'lemon juice',
                    localizedName: 'lemon juice',
                    image: 'lemon-juice.jpg',
                  },
                  {
                    id: 4053,
                    name: 'olive oil',
                    localizedName: 'olive oil',
                    image: 'olive-oil.jpg',
                  },
                  {
                    id: 12061,
                    name: 'almonds',
                    localizedName: 'almonds',
                    image: 'almonds.jpg',
                  },
                  {
                    id: 2028,
                    name: 'paprika',
                    localizedName: 'paprika',
                    image: 'paprika.jpg',
                  },
                  {
                    id: 1001033,
                    name: 'asiago cheese',
                    localizedName: 'asiago cheese',
                    image: 'parmesan.jpg',
                  },
                  {
                    id: 15076,
                    name: 'salmon',
                    localizedName: 'salmon',
                    image: 'salmon.png',
                  },
                  {
                    id: 2047,
                    name: 'salt',
                    localizedName: 'salt',
                    image: 'salt.jpg',
                  },
                ],
                equipment: [
                  {
                    id: 404645,
                    name: 'frying pan',
                    localizedName: 'frying pan',
                    image: 'pan.png',
                  },
                  {
                    id: 404783,
                    name: 'bowl',
                    localizedName: 'bowl',
                    image: 'bowl.jpg',
                  },
                ],
                length: {
                  number: 1,
                  unit: 'minutes',
                },
              },
              {
                number: 2,
                step: 'Place the Salmon (sliced) on top. You can sprinkle it with some more fresh lemon juice:) and black pepper!',
                ingredients: [
                  {
                    id: 1002030,
                    name: 'black pepper',
                    localizedName: 'black pepper',
                    image: 'pepper.jpg',
                  },
                  {
                    id: 9152,
                    name: 'lemon juice',
                    localizedName: 'lemon juice',
                    image: 'lemon-juice.jpg',
                  },
                  {
                    id: 15076,
                    name: 'salmon',
                    localizedName: 'salmon',
                    image: 'salmon.png',
                  },
                ],
                equipment: [],
              },
            ],
          },
        ],
        originalId: null,
        spoonacularSourceUrl: 'https://spoonacular.com/salmon-caesar-salad-646512',
      },
    }
  },
  computed: {
    path() {
      return `${this.$route.params.id}/information`
    },
  },
  methods: {
    async getRecipeData() {
      // try {
      //   const {data} = await this.$axios.get(this.path)
      //   this.recipeData = data
      // } catch (err) {
      //   console.log(err)
      // this.$router.replace({name: 'NotFound'})
      // }
    },
  },
  created() {
    this.getRecipeData()
  },
}
</script>

<style scoped></style>
