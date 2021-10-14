const recipesBig = [
  {
    'id': 0,
    'name': 'Limonade de Coco',
    'servings': 1,
    'ingredients': [
      {
        'ingredient': 'Lait de coco',
        'quantity': 400,
        'unit': 'ml'
      },
      {
        'ingredient': 'Jus de citron',
        'quantity': 2
      },
      {
        'ingredient': 'Crème de coco',
        'quantity': 2,
        'unit': 'cuillères à soupe'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 30,
        'unit': 'g'
      },
      {
        'ingredient': 'Glaçons'
      }
    ],
    'time': 10,
    'description': 'Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu\'à avoir la consistence désirée',
    'appliance': 'blender',
    'ustensils': ['cuillère à soupe', 'verres', 'presse citron']
  },
  {
    'id': 1,
    'name': 'Poisson Cru à la tahitienne',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Thon Rouge (ou blanc)',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Concombre',
        'quantity': 1
      },
      {
        'ingredient': 'Tomate',
        'quantity': 2
      },
      {
        'ingredient': 'Carotte',
        'quantity': 1
      },
      {
        'ingredient': 'Citron Vert',
        'quantity': 5
      },
      {
        'ingredient': 'Lait de coco',
        'quantity': 100,
        'unit': 'ml'
      }
    ],
    'time': 60,
    'description': 'Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco',
    'appliance': 'saladier',
    'ustensils': ['presse citron']
  },
  {
    'id': 2,
    'name': 'Poulet coco réunionnais',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Poulet',
        'quantity': 1
      },
      {
        'ingredient': 'Lait de coco',
        'quantity': 400,
        'unit': 'ml'
      },
      {
        'ingredient': 'Coulis de tomate',
        'quantity': 25,
        'unit': 'cl'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 1
      },
      {
        'ingredient': 'Poivron rouge',
        'quantity': 1
      },
      {
        'ingredient': 'Huile d\'olive'
      }
    ],
    'time': 80,
    'description': 'Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l\'huile d\'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l\'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l\'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz',
    'appliance': 'cocotte',
    'ustensils': ['couteau']
  },
  {
    'id': 3,
    'name': 'Salade de riz',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Riz blanc',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Thon en miettes',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Tomate',
        'quantity': 2
      },
      {
        'ingredient': 'Oeuf dur',
        'quantity': 2
      },
      {
        'ingredient': 'Maïs',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Vinaigrette',
        'quantity': 5,
        'unit': 'cl'
      }
    ],
    'time': 50,
    'description': 'Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..',
    'appliance': 'cuiseur de riz',
    'ustensils': ['saladier', 'passoire']
  },
  {
    'id': 4,
    'name': 'Tarte au thon',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 1
      },
      {
        'ingredient': 'Thon en miettes',
        'quantity': 130,
        'unit': 'g'
      },
      {
        'ingredient': 'Tomate',
        'quantity': 2
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 2,
        'unit': 'cuillères à soupe'
      },
      {
        'ingredient': 'Gruyère râpé',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Moutarde de Dijon',
        'quantity': 1,
        'unite': 'cuillères à soupe'
      }
    ],
    'time': 45,
    'description': 'Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['moule à tarte', 'râpe à fromage', 'couteau']
  },
  {
    'id': 5,
    'name': 'Tarte aux pommes',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Pâte brisée',
        'quantity': 1
      },
      {
        'ingredient': 'Pomme',
        'quantity': 3
      },
      {
        'ingredient': 'Oeuf',
        'quantity': '2'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 25,
        'unit': 'cl'
      },
      {
        'ingredient': 'Sucre en poudre',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre vanillé',
        'quantity': 1,
        'unit': 'sachets'

      }
    ],
    'time': 50,
    'description': 'Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N\'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d\'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes',
    'appliance': 'four',
    'ustensils': ['moule à tarte', 'saladier', 'fourchette']
  },
  {
    'id': 6,
    'name': 'Tartelettes au chocolat et aux fraises',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Pâte sablée',
        'quantity': 1
      },
      {
        'ingredient': 'Chocolat au lait',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème liquide',
        'quantity': 80,
        'unit': 'cl'
      },
      {
        'ingredient': 'Beurre',
        'quantity': '30',
        'unit': 'g'
      },
      {
        'ingredient': 'Fraise',
        'quantity': 6
      }
    ],
    'time': 50,
    'description': 'Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu\'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ',
    'appliance': 'four',
    'ustensils': ['moule à tartelettes (6)', 'casserole']
  },
  {
    'id': 7,
    'name': 'Brownie',
    'servings': 10,
    'ingredients': [
      {
        'ingredient': 'Noix',
        'quantity': '180',
        'unit': 'g'
      },
      {
        'ingredient': 'Chocolat noir',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 120,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 2
      },
      {
        'ingredient': 'Sucre en poudre',
        'quantity': '110',
        'unit': 'g'
      },
      {
        'ingredient': 'Farine',
        'quantity': 90,
        'unit': 'g'
      }

    ],
    'time': 60,
    'description': 'Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d\'avoir quelque chose d\'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.',
    'appliance': 'four',
    'ustensils': ['moule à gateaux', 'casserole']
  },
  {
    'id': 8,
    'name': 'Salade Méditerannéene fraiche au chèvre',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Concombre',
        'quantity': 1
      },
      {
        'ingredient': 'Olives'
      },
      {
        'ingredient': 'Fromage de chèvre',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Vinaigre Balsamic'
      },
      {
        'ingredient': 'Huile d\'olive'
      },
      {
        'ingredient': 'Basilic'
      }
    ],
    'time': 15,
    'description': 'Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l\'huile d\'olives à votre gout.',
    'appliance': 'saladier',
    'ustensils': ['cuillère en bois', 'couteau']
  },
  {
    'id': 9,
    'name': 'Tartiflette',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Roblochon',
        'quantity': '1'
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 4.5,
        'unit': 'kg'
      },
      {
        'ingredient': 'Jambon fumé',
        'quantity': 2,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Vin blanc sec',
        'quantity': 30,
        'unit': 'cl'
      }
    ],
    'time': 60,
    'description': 'Commencer par cuire les pommes de terre dans l\'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l\'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C\'est prêt !',
    'appliance': 'four',
    'ustensils': ['plat à gratin', 'couteau', 'économe']
  },
  {
    'id': 10,
    'name': 'Salade tomate, mozzarella et pommes',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Tomates cerises',
        'quantity': 250,
        'unit': 'g'
      },
      {
        'ingredient': 'Mozzarella',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Jambon de parme',
        'quantity': 4,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Pomme',
        'quantity': 1
      },
      {
        'ingredient': 'Salade Verte',
        'quantity': 1
      },
      {
        'ingredient': 'Vinaigrette',
        'quantity': 5,
        'unit': 'cl'
      }
    ],
    'time': 10,
    'description': 'Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ',
    'appliance': 'saladier',
    'ustensils': ['couteau', 'cuillère à melon']
  },
  {
    'id': 11,
    'name': 'Compote pomme rhubarbe',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Rhubarbe',
        'quantity': 160,
        'unit': 'g'
      },
      {
        'ingredient': 'Pomme',
        'quantity': 8
      },
      {
        'ingredient': 'Sucre vanillé',
        'quantity': 6,
        'unit': 'sachets'
      },
      {
        'ingredient': 'Eau',
        'quantity': '0.5',
        'unit': 'tasses'
      }
    ],
    'time': 40,
    'description': 'Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l\'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.',
    'appliance': 'casserole',
    'ustensils': ['couteau', 'économe']
  },
  {
    'id': 12,
    'name': 'Salade mâchée de patates',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Mâche',
        'quantity': 60,
        'unit': 'g'
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Échalote',
        'quantity': 2

      },
      {
        'ingredient': 'Vinaigre de cidre',
        'quantity': 1,
        'unit': 'cuillère à soupe'
      },
      {
        'ingredient': 'Huile d\'olive',
        'quantity': 2,
        'unit': 'cuillère à soupe'
      }
    ],
    'time': 40,
    'description': 'Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l\'huile d\'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter',
    'appliance': 'casserole',
    'ustensils': ['couteau', 'saladier', 'cuillère en bois']
  },
  {
    'id': 13,
    'name': 'Galette Bretonne Saucisse et Fromage à raclette',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Saucisse bretonne ou de toulouse',
        'quantity': 2
      },
      {
        'ingredient': 'Farine de blé noir',
        'quantity': 130,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 1

      },
      {
        'ingredient': 'Fromage à raclette',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 1
      },
      {
        'ingredient': 'Beurre',
        'quantity': 75,
        'unit': 'g'
      }

    ],
    'time': 100,
    'description': 'Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l\'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes',
    'appliance': 'four',
    'ustensils': ['poêle à frire', 'couteau']
  },
  {
    'id': 14,
    'name': 'Crêpes Chocolat Banane',
    'servings': 10,
    'ingredients': [
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Farine',
        'quantity': 250,
        'unit': 'g'
      },
      {
        'ingredient': 'Lait',
        'quantity': 600,
        'unit': 'ml'
      },
      {
        'ingredient': 'Beurre salé',
        'quantity': 30,
        'unit': 'g'
      },
      {
        'ingredient': 'Chocolat au lait',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Banane',
        'quantity': 4
      }
    ],
    'time': 60,
    'description': 'Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu\'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands',
    'appliance': 'poële à crêpe',
    'ustensils': ['saladier', 'louche', 'cuillère en bois']
  },
  {
    'id': 15,
    'name': 'Gratin de pâtes à la tomate',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Tomate',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Mozzarella',
        'quantity': 250,
        'unit': 'g'
      },
      {
        'ingredient': 'Pennes',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Basilic',
        'quantity': 1,
        'unit': 'tiges'
      },
      {
        'ingredient': 'Huile d\'olive',
        'quantity': 2,
        'unit': 'cuillère à soupe'
      }
    ],
    'time': 45,
    'description': 'Faire cuire les pâtes si vous n\'avez pas de pennes des coquillettes peuvent faire l\'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.',
    'appliance': 'four',
    'ustensils': ['plat à gratin', 'couteau', 'râpe à fromage']
  },
  {
    'id': 16,
    'name': 'Smoothie à la fraise',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Fraise',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Pastèque',
        'quantity': 0.5
      },
      {
        'ingredient': 'Jus de citron',
        'quantity': 1,
        'unit': 'cuillères à soupe'
      },
      {
        'ingredient': 'Glaçons',
        'quantity': 8
      },
      {
        'ingredient': 'Menthe'
      }
    ],
    'time': 15,
    'description': 'Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.',
    'appliance': 'blender',
    'ustensils': ['verres', 'couteau', 'presse citron']
  },
  {
    'id': 17,
    'name': 'Smoothie ananas et vanille',
    'servings': 5,
    'ingredients': [
      {
        'ingredient': 'Ananas',
        'quantity': 1
      },
      {
        'ingredient': 'Glace à la vanille',
        'quantity': 500,
        'unit': 'ml'
      },
      {
        'ingredient': 'Lait',
        'quantity': 50,
        'unit': 'cl'
      }
    ],
    'time': 10,
    'description': 'Séparez 1/5ème d\'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l\'ananas restant. C\'est prêt',
    'appliance': 'blender',
    'ustensils': ['verres', 'couteau']
  },
  {
    'id': 18,
    'name': 'Shake Banane Kiwi',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Kiwi',
        'quantity': 4
      },
      {
        'ingredient': 'Citron',
        'quantity': 1
      },
      {
        'ingredient': 'Lait',
        'quantity': 1,
        'unit': 'litres'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 30,
        'unit': 'g'
      },
      {
        'ingredient': 'Banane',
        'quantity': 1
      }
    ],
    'time': 0,
    'description': 'Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n\'a pas été mis au frais.',
    'appliance': 'blender',
    'ustensils': ['couteau', 'verres', 'presse citron']
  },
  {
    'id': 19,
    'name': 'Pates Carbonara',
    'servings': 5,
    'ingredients': [
      {
        'ingredient': 'Tagliatelles',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Lardons',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Parmesan',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Huile d\'olive',
        'quantity': 1,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 30,
    'description': 'Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l\'huile d\'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d\'oeuf. Servir et ajouter le parmesan râpé.',
    'appliance': 'sauteuse',
    'ustensils': ['râpe à fromage', 'cuillère en bois']
  },
  {
    'id': 20,
    'name': 'Spaghettis à la bolognaise',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Spaghettis',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 2
      },
      {
        'ingredient': 'Coulis de tomate',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Viande hachée 1% de matière grasse',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Vin rouge',
        'quantity': 20,
        'unit': 'cl'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 1,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 30,
    'description': 'Cuisiner la viande hachée dans une poêle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.',
    'appliance': 'casserole',
    'ustensils': ['cuillère en bois', 'louche', 'couteau']
  },
  {
    'id': 21,
    'name': 'Fondant au chocolat',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Beurre',
        'quantity': 160,
        'unit': 'g'
      },
      {
        'ingredient': 'Chocolat noir',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Farine',
        'quantity': 50,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 4
      },
      {
        'ingredient': 'Sucre',
        'quantity': 150,
        'unit': 'g'
      }
    ],
    'time': 30,
    'description': 'Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu\'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C\'est prêt. Servir avec une boule de glace ou une crême dessert.',
    'appliance': 'four',
    'ustensils': ['moule à gateaux', 'fouet', 'casserole']
  },
  {
    'id': 22,
    'name': 'Quiche lorraine',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pâte brisée',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Lardons',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 30,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 20,
        'unit': 'cl'
      },
      {
        'ingredient': 'Lait',
        'quantity': 20,
        'unit': 'cl'
      }
    ],
    'time': 60,
    'description': 'Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l\'ensemble sur la pâte. Cuire environ 50 minutes.',
    'appliance': 'four',
    'ustensils': ['moule à gateaux', 'rouleau à patisserie', 'fouet']
  },
  {
    'id': 23,
    'name': 'Salade de pâtes',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Thon en miettes',
        'quantity': 160,
        'unit': 'g'
      },
      {
        'ingredient': 'Maïs',
        'quantity': 60,
        'unit': 'g'
      },
      {
        'ingredient': 'Tomate',
        'quantity': 1
      },
      {
        'ingredient': 'Concombre',
        'quantity': 0.5
      },
      {
        'ingredient': 'Macaronis',
        'quantity': 300,
        'unit': 'g'
      },
      {
        'ingredient': 'Mayonnaise',
        'quantity': 2,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 40,
    'description': 'Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.',
    'appliance': 'saladier',
    'ustensils': ['couteau', 'cuillère en bois']
  },
  {
    'id': 24,
    'name': 'Cookies',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Sucre',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Farine',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Chocolat noir en pepites',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 1
      }
    ],
    'time': 30,
    'description': 'Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l\'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.',
    'appliance': 'four',
    'ustensils': ['fouet', 'saladier', 'plaque de cuisson']
  },
  {
    'id': 25,
    'name': 'Soupe de tomates',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Tomate',
        'quantity': 6
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 1
      },
      {
        'ingredient': 'Huile d\'olive'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 1
      },
      {
        'ingredient': 'Ail',
        'quantity': 1,
        'unit': 'gousses'
      }
    ],
    'time': 25,
    'description': 'Verser de l\'huile dans une cocotte minute couper les légumes et les verser dans l\'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.',
    'appliance': 'mixer',
    'ustensils': ['cocotte minute', 'couteau']
  },
  {
    'id': 26,
    'name': 'Soupe à l\'oseille',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Oseille',
        'quantity': 2
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 1
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 4,
        'unit': 'cuillère à soupe'
      },
      {
        'ingredient': 'Vermicelles',
        'quantity': 1,
        'unit': 'verres'
      },
      {
        'ingredient': 'Beurre salé',
        'quantity': 50,
        'unit': 'g'
      }
    ],
    'time': 15,
    'description': 'Faire fondre l\'oseille avec du beurre demi sel, ajouter un litre d\'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d\'oeuf et la crême fraîche',
    'appliance': 'casserole',
    'ustensils': ['couteau', 'cuillère en bois']
  },
  {
    'id': 27,
    'name': 'Soupe de poireaux',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Poireau',
        'quantity': 3
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oseille',
        'quantity': 75,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 50,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 10,
        'unit': 'cl'
      }
    ],
    'time': 80,
    'description': 'Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l\'eau et laisser mijoter pour 45 minutes. Chauffer l\'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.',
    'appliance': 'mixer',
    'ustensils': ['casserole', 'couteau']
  },
  {
    'id': 28,
    'name': 'Houmous Express',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pois chiches',
        'quantity': 1,
        'unit': 'boites'
      },
      {
        'ingredient': 'Ail',
        'quantity': 1,
        'unit': 'gousses'
      },
      {
        'ingredient': 'Citron',
        'quantity': 2
      },
      {
        'ingredient': 'Huile d\'olive'
      },
      {
        'ingredient': 'Paprika'
      }
    ],
    'time': 30,
    'description': 'Prendre les pois chiches, les mettre dans le mixer avec de l\'huile d\'olive, ajouter le jus des 2 citrons et du paprika selon le gout.',
    'appliance': 'mixer',
    'ustensils': ['cuillère en bois', 'presse citron']
  },
  {
    'id': 29,
    'name': 'Purée de pois cassés',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pois Cassé',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 1
      },
      {
        'ingredient': 'Ail',
        'quantity': 2,
        'unit': 'gousses'
      }
    ],
    'time': 60,
    'description': 'Mettre tous les ingrédients dans une cocotte. ajouter de l\'eau pour recouvrir l\'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C\'est prêt',
    'appliance': 'mixer',
    'ustensils': ['casserole', 'cuillère en bois']
  },
  {
    'id': 30,
    'name': 'Jardinière de légumes',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Carotte',
        'quantity': 2
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 2
      },
      {
        'ingredient': 'Haricots verts',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Petits poids',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Lardons',
        'quantity': 150,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d\'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier',
    'appliance': 'poële',
    'ustensils': ['couteau', 'économe']
  },
  {
    'id': 31,
    'name': 'Croque Monsieur à la dinde',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pain de mie',
        'quantity': 8,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Blanc de dinde',
        'quantity': 4,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Emmental',
        'quantity': 8,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Gruyère',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Lait',
        'quantity': 5,
        'unit': 'cl'
      },
      {
        'ingredient': 'Noix de muscade',
        'quantity': 1,
        'unit': 'pincées'
      }
    ],
    'time': 20,
    'description': 'Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d\'émental, une de blanc de dinde, et une autre d\'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.',
    'appliance': 'four',
    'ustensils': ['râpe à fromage', 'cuillère à soupe', 'couteau']
  },
  {
    'id': 32,
    'name': 'Sandwich au saumon fumé',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pain de mie',
        'quantity': 8,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Saumon Fumé',
        'quantity': 4,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Feuilles de laitue',
        'quantity': 4
      },
      {
        'ingredient': 'Fromage blanc',
        'quantity': 4,
        'unit': 'cuillères à soupe'
      },
      {
        'ingredient': 'Jus de citron',
        'quantity': 1,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 5,
    'description': 'Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C\'est prêt.',
    'appliance': 'four',
    'ustensils': ['couteau', 'cuillère en bois']
  },
  {
    'id': 33,
    'name': 'Purée de patate douce',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Patate douce',
        'quantity': 800,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 20,
        'unit': 'cl'
      },
      {
        'ingredient': 'Huile d\'olive'
      },
      {
        'ingredient': 'Orange',
        'quantity': 1
      }
    ],
    'time': 25,
    'description': 'Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserole d\'eau bouillante. Passer au mixer en ajoutant la crème et l\'huile d\'olive à son gout. Salez, poivrez. Pressez l\'orange et ajouter le jus à l\'ensemble. Servir.',
    'appliance': 'mixer',
    'ustensils': ['couteau', 'économe', 'cuillère en bois']
  },
  {
    'id': 34,
    'name': 'Purée de carottes',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Carotte',
        'quantity': 6
      },
      {
        'ingredient': 'Pomme de terre',
        'quantity': 1
      },
      {
        'ingredient': 'Beurre',
        'quantity': 20,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 2,
        'unit': 'cuillères à soupe'
      },
      {
        'ingredient': 'Cumin',
        'quantity': 1,
        'unit': 'cuillères à café'
      },
      {
        'ingredient': 'Noix de muscade',
        'quantity': 1,
        'unit': 'pincées'
      }
    ],
    'time': 25,
    'description': 'Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.',
    'appliance': 'mixer',
    'ustensils': ['cocotte minute', 'couteau', 'cuillère en bois']
  },
  {
    'id': 35,
    'name': 'Lasagne Courgettes et Chèvre',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Courgette',
        'quantity': 2
      },
      {
        'ingredient': 'Fromage de chèvre',
        'quantity': 4
      },
      {
        'ingredient': 'Lait',
        'quantity': 25,
        'unit': 'cl'
      },
      {
        'ingredient': 'Lasagnes',
        'quantity': 5,
        'unit': 'feuilles'
      },
      {
        'ingredient': 'Gruyère',
        'quantity': 40,
        'unit': 'g'
      },
      {
        'ingredient': 'Maïzena',
        'quantity': 1,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 35,
    'description': 'Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.',
    'appliance': 'four',
    'ustensils': ['plat à gratin', 'râpe à fromage', 'fouet']
  },
  {
    'id': 36,
    'name': 'Courgettes farcies au boeuf',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Courgette',
        'quantity': 2
      },
      {
        'ingredient': 'Viande hachée',
        'quantity': 600,
        'unit': 'g'
      },
      {
        'ingredient': 'Huile d\'olive',
        'quantity': 25,
        'unit': 'cl'
      },
      {
        'ingredient': 'Oignon',
        'quantity': 1
      },
      {
        'ingredient': 'Coulis de tomate',
        'quantity': 20,
        'unit': 'cl'
      },
      {
        'ingredient': 'Gruyère',
        'quantity': 50,
        'unit': 'g'
      }

    ],
    'time': 60,
    'description': 'Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d\'huile d\'olive. Ajouter l\'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé',
    'appliance': 'four',
    'ustensils': ['couteau', 'cuillère en bois', 'poêle à frire']
  },
  {
    'id': 37,
    'name': 'Pain Perdu',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pain',
        'quantity': 6,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Lait',
        'quantity': 25,
        'unit': 'cl'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Sucre roux',
        'quantity': 75,
        'unit': 'g'
      }
    ],
    'time': 20,
    'description': 'Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir',
    'appliance': 'four',
    'ustensils': ['fouet', 'bol', 'cuillère à soupe']
  },
  {
    'id': 38,
    'name': 'Crumble aux pommes',
    'servings': 40,
    'ingredients': [
      {
        'ingredient': 'Pomme',
        'quantity': 2
      },
      {
        'ingredient': 'Farine',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 50,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre roux',
        'quantity': 80,
        'unit': 'g'
      }
    ],
    'time': 40,
    'description': 'Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four',
    'appliance': 'four',
    'ustensils': ['saladier', 'couteau', 'fouet']
  },
  {
    'id': 39,
    'name': 'Limonade',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Eau',
        'quantity': 1,
        'unit': 'Litres'
      },
      {
        'ingredient': 'Citron Vert',
        'quantity': 3
      },
      {
        'ingredient': 'Sucre en poudre',
        'quantity': 4,
        'unit': 'cuillères à café'
      },
      {
        'ingredient': 'Bicarbonate',
        'quantity': 1,
        'unit': 'cuillères à café'
      }
    ],
    'time': 10,
    'description': 'Dans un saladier mettre l\'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.',
    'appliance': 'saladier',
    'ustensils': ['cuillère en bois']
  },
  {
    'id': 40,
    'name': 'Mousse au chocolat',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Chocolat noir',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre vanillé',
        'quantity': 1,
        'unit': 'sachets'
      }
    ],
    'time': 20,
    'description': 'Séparer les blancs d\'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais',
    'appliance': 'casserole',
    'ustensils': ['fouet', 'spatule', 'verres']
  },
  {
    'id': 41,
    'name': 'Charlotte au poires',
    'servings': 3,
    'ingredients': [
      {
        'ingredient': 'Chocolat',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Poires au jus',
        'quantity': 0.5,
        'unit': 'boites'
      },
      {
        'ingredient': 'Boudoirs',
        'quantity': 15
      }
    ],
    'time': 60,
    'description': 'Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.',
    'appliance': 'moule à charlotte',
    'ustensils': ['saladier', 'couteau', 'fouet']
  },
  {
    'id': 42,
    'name': 'Tarte au citron',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Pâte brisée',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre fondu',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 3
      },
      {
        'ingredient': 'Citron'
      }
    ],
    'time': 50,
    'description': 'Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'moule à tarte', 'presse citron']
  },
  {
    'id': 43,
    'name': 'Crème dessert au chocolat',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Lait',
        'quantity': 1,
        'unit': 'litres'
      },
      {
        'ingredient': 'Chocolat',
        'quantity': 200,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 50,
        'unit': 'g'
      },
      {
        'ingredient': 'Farine',
        'quantity': 40,
        'unit': 'g'
      }
    ],
    'time': 15,
    'description': 'Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres',
    'appliance': 'casserole',
    'ustensils': ['cuillère en bois']
  },
  {
    'id': 44,
    'name': 'Crème pâtissière',
    'servings': 8,
    'ingredients': [
      {
        'ingredient': 'Lait',
        'quantity': 50,
        'unit': 'cl'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 2
      },
      {
        'ingredient': 'Farine',
        'quantity': 30,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 80,
        'unit': 'g'
      }
    ],
    'time': 30,
    'description': 'Faire bouillir le lait ( on peut y ajouter de l\'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.',
    'appliance': 'casserole',
    'ustensils': ['fouet', 'saladier']
  },
  {
    'id': 45,
    'name': 'Far breton',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Farine',
        'quantity': 250,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 150,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre vanillé',
        'quantity': 1,
        'unit': 'sachets'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 4
      },
      {
        'ingredient': 'Lait',
        'quantity': 1,
        'unit': 'litre'
      },
      {
        'ingredient': 'Pruneaux',
        'quantity': 100,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes',
    'appliance': 'four',
    'ustensils': ['fouet', 'moule', 'verres']
  },
  {
    'id': 46,
    'name': 'Mousse au citron',
    'servings': 6,
    'ingredients': [
      {
        'ingredient': 'Jus de citron',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Mascarpone',
        'quantity': 250,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre',
        'quantity': 100,
        'unit': 'g'
      },
      {
        'ingredient': 'Crème fraîche',
        'quantity': 20,
        'unit': 'cl'
      }
    ],
    'time': 5,
    'description': 'Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir',
    'appliance': 'saladier',
    'ustensils': ['fouet', 'verres', 'cuillère en bois']
  },
  {
    'id': 47,
    'name': 'Pizza',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Pâte à pizza',
        'quantity': 1
      },
      {
        'ingredient': 'Tomates pelées',
        'quantity': 1,
        'unit': 'boites'
      },
      {
        'ingredient': 'Lardons',
        'quantity': 1,
        'unit': 'barquettes'
      },
      {
        'ingredient': 'Champignons de paris',
        'quantity': 1,
        'unit': 'boites'
      },
      {
        'ingredient': 'Gruyère',
        'quantity': 200,
        'unit': 'g'
      }
    ],
    'time': 40,
    'description': 'Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'râpe à fromage', 'couteau']
  },
  {
    'id': 48,
    'name': 'Smoothie tropical',
    'servings': 4,
    'ingredients': [
      {
        'ingredient': 'Banane',
        'quantity': 2
      },
      {
        'ingredient': 'Kiwi',
        'quantity': 3
      },
      {
        'ingredient': 'Mangue',
        'quantity': 1
      },
      {
        'ingredient': 'Ananas',
        'quantity': 4,
        'unit': 'tranches'
      },
      {
        'ingredient': 'Miel',
        'quantity': 2,
        'unit': 'cuillères à soupe'
      }
    ],
    'time': 0,
    'description': 'Découper les fruits. Le passer au blender jusqu\'à obtenir une texture liquide. Mettre au frais. Servir',
    'appliance': 'blender',
    'ustensils': ['couteau', 'verres']
  },
  {
    'id': 49,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 50,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 51,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 52,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 53,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 54,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 55,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 56,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 57,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 58,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 59,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 60,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 61,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 62,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 63,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 64,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 65,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 66,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 67,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 68,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 69,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 70,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 71,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 72,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 73,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 74,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 75,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 76,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 77,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 78,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 79,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 80,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 81,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 82,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 83,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 84,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 85,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 86,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 87,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 88,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 89,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 90,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 91,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 92,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 93,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 94,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 95,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 96,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 97,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 98,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 99,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 100,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 101,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 102,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 103,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 104,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 105,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 106,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 107,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 108,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 109,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 110,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 111,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 112,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 113,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 114,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 115,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 116,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 117,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 118,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 119,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 120,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 121,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 122,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 123,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 124,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 125,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 126,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 127,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 128,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 129,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 130,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 131,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 132,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 133,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 134,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 135,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 136,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 137,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 138,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 139,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 140,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 141,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 142,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 143,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 144,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 145,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 146,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 147,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 148,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 149,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 150,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 151,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 152,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 153,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 154,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 155,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 156,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 157,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 158,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 159,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 160,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 161,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 162,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 163,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 164,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 165,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 166,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 167,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 168,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 169,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 170,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 171,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 172,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 173,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 174,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 175,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 176,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 177,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 178,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 179,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 180,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 181,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 182,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 183,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 184,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 185,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 186,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 187,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 188,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 189,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 190,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 191,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 192,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 193,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 194,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 195,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 196,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 197,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 198,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 199,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 200,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 201,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 202,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 203,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 204,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 205,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 206,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 207,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 208,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 209,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 210,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 211,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 212,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 213,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 214,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 215,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 216,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 217,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 218,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 219,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 220,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 221,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 222,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 223,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 224,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 225,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 226,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 227,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 228,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 229,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 230,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 231,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 232,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 233,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 234,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 235,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 236,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 237,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 238,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 239,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 240,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 241,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 242,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 243,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 244,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 245,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 246,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 247,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 248,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 249,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 250,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 251,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 252,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 253,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 254,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 255,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 256,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 257,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 258,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 259,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 260,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 261,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 262,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 263,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 264,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 265,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 266,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 267,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 268,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 269,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 270,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 271,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 272,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 273,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 274,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 275,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 276,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 277,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 278,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 279,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 280,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 281,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 282,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 283,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 284,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 285,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 286,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 287,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 288,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 289,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 290,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 291,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 292,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 293,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 294,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 295,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 296,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 297,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 298,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 299,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 300,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 301,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
  {
    'id': 302,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 303,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 304,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 305,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 306,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 307,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 308,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 309,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 310,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 311,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 312,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 313,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 314,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 315,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 316,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 317,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 318,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 319,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 320,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 321,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 322,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 323,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 324,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 325,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 326,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 327,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 328,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 329,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 330,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 331,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 332,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 333,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 334,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 335,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 336,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 337,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 338,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 339,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 340,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 341,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 342,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 343,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 344,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 345,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 346,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 347,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 348,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 349,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 350,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 351,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 352,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 353,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 354,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 355,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 356,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 357,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 358,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 359,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 360,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 361,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 362,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 363,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 364,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 365,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 366,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 367,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 368,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 369,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 370,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 371,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 372,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 373,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 374,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 375,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 376,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 377,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 378,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 379,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 380,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 381,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 382,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 383,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 384,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 385,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 386,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 387,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 388,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 389,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 390,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 391,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 392,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 393,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 394,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 395,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 396,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 397,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 398,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 399,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 400,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 401,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 402,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 403,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 404,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 405,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 406,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 407,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 408,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 409,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 410,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 411,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 412,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 413,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 414,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 415,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 416,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 417,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 418,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 419,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 420,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 421,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 422,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 423,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 424,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 425,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 426,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 427,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 428,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 429,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 430,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 431,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 432,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 433,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 434,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 435,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 436,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 437,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 438,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 439,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 440,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 441,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 442,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 443,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 444,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 445,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 446,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 447,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 448,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 449,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 450,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 451,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 452,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 453,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 454,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 455,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 456,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 457,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 458,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 459,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 460,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 461,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 462,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 463,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 464,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 465,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 466,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 467,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 468,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 469,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 470,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 471,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 472,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 473,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 474,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 475,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 476,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 477,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 478,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 479,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 480,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 481,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 482,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 483,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 484,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 485,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 486,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 487,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 488,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 489,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 490,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 491,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 492,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 493,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 494,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 495,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 496,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 497,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 498,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 499,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 500,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 501,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 502,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 503,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 504,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 505,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 506,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 507,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 508,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 509,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 510,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 511,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 512,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 513,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 514,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 515,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 516,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 517,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 518,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 519,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 520,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 521,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 522,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 523,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 524,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 525,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 526,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 527,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 528,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 529,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 530,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 531,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 532,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 533,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 534,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 535,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 536,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 537,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 538,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 539,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 540,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 541,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 542,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 543,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 544,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 545,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 546,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 547,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 548,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 549,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 550,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 551,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 552,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 553,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 554,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 555,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 556,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 557,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 558,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 559,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 560,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 561,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 562,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 563,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 564,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 565,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 566,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 567,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 568,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 569,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 570,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 571,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 572,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 573,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 574,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 575,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 576,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 577,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 578,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 579,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 580,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 581,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 582,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 583,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 584,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 585,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 586,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 587,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 588,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 589,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 590,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 591,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 592,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 593,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 594,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 595,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 596,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 597,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 598,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },{
    'id': 599,
    'name': 'Frangipane',
    'servings': 2,
    'ingredients': [
      {
        'ingredient': 'Pâte feuilletée',
        'quantity': 400,
        'unit': 'g'
      },
      {
        'ingredient': 'Oeuf',
        'quantity': 6
      },
      {
        'ingredient': 'Poudre d\'amande',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Beurre',
        'quantity': 500,
        'unit': 'g'
      },
      {
        'ingredient': 'Sucre glace',
        'quantity': 500,
        'unit': 'g'
      }
    ],
    'time': 60,
    'description': 'Préparer la frangipane : Mélanger le sucre la poudre d\'amande, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes',
    'appliance': 'four',
    'ustensils': ['rouleau à patisserie', 'fouet']
  },
]