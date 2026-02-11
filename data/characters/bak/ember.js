(function () {
  window.characters = window.characters || [];
  window.characters.push({
    id: "ember",
    name: "余烬",
    avatar: "image/characters/余烬.png",
    rarity: 5,
    weaponType: "双手剑",
    mainAbility: "力量",
    subAbility: "敏捷",
    element: "热熔",
    role: "破韧/输出",
    profession: "破韧/输出",
    stats: {
      strength: "",
      agility: "",
      intellect: "",
      will: "",
      attack: "",
      hp: ""
    },
    skills: [
      {
        name: "烈焰斩",
        icon: "",
        description: "对前方扇形区域内的敌人造成攻击力 200% 的热熔伤害，并使其韧性降低。",
        dataTables: [
          {
            title: "技能数据",
            rows: [
              {
                name: "伤害倍率",
                values: {
                  levels: ["200%", "220%", "240%", "260%", "280%"]
                }
              }
            ]
          }
        ]
      },
      {
        name: "熔核爆发",
        icon: "",
        description: "引爆周围的热能，对范围内所有敌人造成攻击力 350% 的热熔伤害。",
        dataTables: [
          {
            title: "技能数据",
            rows: [
              {
                name: "爆炸伤害倍率",
                values: {
                  levels: ["350%", "380%", "410%", "440%", "470%"]
                }
              }
            ]
          }
        ]
      },
      {
        name: "被动：热力循环",
        icon: "",
        description: "每次施放技能后，提升自身 10% 攻击力，持续 10 秒，最多叠加 3 层。",
        dataTables: [
          {
            title: "技能数据",
            rows: [
              {
                name: "攻击力提升",
                values: {
                  levels: ["10%", "12%", "14%", "16%", "18%"]
                }
              },
              {
                name: "持续时间",
                value: "10秒"
              }
            ]
          }
        ]
      },
      {
        name: "终结技：焦土",
        icon: "",
        description: "召唤持续燃烧的焦土，每秒对范围内敌人造成攻击力 80% 的伤害，持续 15 秒。",
        dataTables: [
          {
            title: "技能数据",
            rows: [
              {
                name: "每秒伤害倍率",
                values: {
                  levels: ["80%", "90%", "100%", "110%", "120%"]
                }
              },
              {
                name: "持续时间",
                value: "15秒"
              }
            ]
          }
        ]
      }
    ],
    talents: [
      {
        name: "余热",
        icon: "",
        description: "攻击处于灼烧状态的敌人时，暴击率提升 15%。"
      },
      {
        name: "高能反应",
        icon: "",
        description: "入场时立即获得 20 点技力。"
      }
    ],
    potentials: [
      "部署费用 -1",
      "第一天赋效果增强（+5%）",
      "攻击力 +25",
      "再部署时间 -10秒",
      "第二天赋效果增强（+5点）"
    ],
    materials: {
      elite1: ["源岩 x5", "破损装置 x3", "龙门币 x10000"],
      elite2: ["固源岩组 x5", "全新装置 x3", "龙门币 x30000"],
      elite3: ["提纯源岩 x5", "改量装置 x3", "龙门币 x80000"],
      elite4: ["D32钢 x4", "聚合剂 x4", "龙门币 x150000"]
    },
    baseSkills: [
      { name: "热能工程", description: "进驻制造站时，热熔类配方的生产力 +30%" },
      { name: "标准化", description: "进驻制造站时，仓库容量上限 +10" },
      { name: "交际", description: "进驻人力办公室时，人脉资源联络速度 +30%" },
      { name: "专注", description: "进驻加工站加工精英材料时，心情消耗 -2" }
    ],
    guide: {
      gearRows: [
        {
          weapons: [
            { name: "大雷斑", icon: "image/大雷斑.png" }
          ],
          equipment: [
            { name: "拓荒护甲", icon: "image/gear/5/拓荒护甲.png", rarity: 5 },
            { name: "拓荒耐蚀手套", icon: "image/gear/5/拓荒耐蚀手套.png", rarity: 5 },
            { name: "拓荒通信器", icon: "image/gear/5/拓荒通信器.png", rarity: 5 },
            { name: "拓荒增量供氧栓", icon: "image/gear/5/拓荒增量供氧栓.png", rarity: 5 }
          ]
        },
        {
          weapons: [
            { name: "热熔切割器", icon: "image/热熔切割器.png" }
          ],
          equipment: [
            { name: "矿场防护服·壹型", icon: "image/gear/4/矿场防护服·壹型.png", rarity: 4 },
            { name: "矿场护手·壹型", icon: "image/gear/4/矿场护手·壹型.png", rarity: 4 },
            { name: "矿场联络仪·壹型", icon: "image/gear/4/矿场联络仪·壹型.png", rarity: 4 },
            { name: "矿场传动轮·壹型", icon: "image/gear/4/矿场传动轮·壹型.png", rarity: 4 }
          ]
        }
      ],
      analysis: "",
      teamTips: "",
      operationTips: "",
      skillTips: "优先强化烈焰斩与熔核爆发，保证破韧与爆发覆盖。",
      teamSlots: [
        {
          options: [
            {
              name: "余烬",
              weapons: [
                { name: "大雷斑", icon: "image/大雷斑.png" }
              ],
              equipment: [
                { name: "拓荒护甲", icon: "image/gear/5/拓荒护甲.png", rarity: 5 },
                { name: "拓荒耐蚀手套", icon: "image/gear/5/拓荒耐蚀手套.png", rarity: 5 },
                { name: "拓荒通信器", icon: "image/gear/5/拓荒通信器.png", rarity: 5 },
                { name: "拓荒增量供氧栓", icon: "image/gear/5/拓荒增量供氧栓.png", rarity: 5 }
              ]
            },
            {
              name: "余烬(下位)",
              tag: "下位",
              weapons: [
                { name: "热熔切割器", icon: "image/热熔切割器.png" }
              ],
              equipment: [
                { name: "矿场防护服·壹型", icon: "image/gear/4/矿场防护服·壹型.png", rarity: 4 },
                { name: "矿场护手·壹型", icon: "image/gear/4/矿场护手·壹型.png", rarity: 4 },
                { name: "矿场联络仪·壹型", icon: "image/gear/4/矿场联络仪·壹型.png", rarity: 4 },
                { name: "矿场传动轮·壹型", icon: "image/gear/4/矿场传动轮·壹型.png", rarity: 4 }
              ]
            }
          ]
        },
        {
          options: [
            {
              name: "佩丽卡",
              weapons: [
                { name: "典范", icon: "image/典范.png" }
              ],
              equipment: [
                { name: "轻超域护板", icon: "image/gear/5/轻超域护板.png", rarity: 5 },
                { name: "轻超域护手", icon: "image/gear/5/轻超域护手.png", rarity: 5 },
                { name: "轻超域分析环", icon: "image/gear/5/轻超域分析环.png", rarity: 5 },
                { name: "轻超域稳定盘", icon: "image/gear/5/轻超域稳定盘.png", rarity: 5 }
              ]
            },
            {
              name: "佩丽卡(下位)",
              tag: "下位",
              weapons: [
                { name: "爆破单元", icon: "image/爆破单元.png" }
              ],
              equipment: [
                { name: "阿伯莉轻甲", icon: "image/gear/4/阿伯莉轻甲.png", rarity: 4 },
                { name: "阿伯莉手甲", icon: "image/gear/4/阿伯莉手甲.png", rarity: 4 },
                { name: "阿伯莉侦听芯片", icon: "image/gear/4/阿伯莉侦听芯片.png", rarity: 4 },
                { name: "阿伯莉传感芯片", icon: "image/gear/4/阿伯莉传感芯片.png", rarity: 4 }
              ]
            }
          ]
        },
        {
          options: [
            {
              name: "陈千语",
              weapons: [
                { name: "作品：蚀迹", icon: "image/作品：蚀迹.png" }
              ],
              equipment: [
                { name: "轻超域护板", icon: "image/gear/5/轻超域护板.png", rarity: 5 },
                { name: "轻超域护手", icon: "image/gear/5/轻超域护手.png", rarity: 5 },
                { name: "轻超域分析环", icon: "image/gear/5/轻超域分析环.png", rarity: 5 },
                { name: "轻超域稳定盘", icon: "image/gear/5/轻超域稳定盘.png", rarity: 5 }
              ]
            },
            {
              name: "陈千语(下位)",
              tag: "下位",
              weapons: [
                { name: "白夜新星", icon: "image/白夜新星.png" }
              ],
              equipment: [
                { name: "阿伯莉轻甲", icon: "image/gear/4/阿伯莉轻甲.png", rarity: 4 },
                { name: "阿伯莉手甲", icon: "image/gear/4/阿伯莉手甲.png", rarity: 4 },
                { name: "阿伯莉侦听芯片", icon: "image/gear/4/阿伯莉侦听芯片.png", rarity: 4 },
                { name: "阿伯莉传感芯片", icon: "image/gear/4/阿伯莉传感芯片.png", rarity: 4 }
              ]
            }
          ]
        },
        {
          options: [
            {
              name: "管理员",
              weapons: [
                { name: "宏愿", icon: "image/宏愿.png" }
              ],
              equipment: [
                { name: "轻超域护板", icon: "image/gear/5/轻超域护板.png", rarity: 5 },
                { name: "轻超域护手", icon: "image/gear/5/轻超域护手.png", rarity: 5 },
                { name: "轻超域分析环", icon: "image/gear/5/轻超域分析环.png", rarity: 5 },
                { name: "轻超域稳定盘", icon: "image/gear/5/轻超域稳定盘.png", rarity: 5 }
              ]
            },
            {
              name: "管理员(下位)",
              tag: "下位",
              weapons: [
                { name: "古渠", icon: "image/古渠.png" }
              ],
              equipment: [
                { name: "阿伯莉轻甲", icon: "image/gear/4/阿伯莉轻甲.png", rarity: 4 },
                { name: "阿伯莉手甲", icon: "image/gear/4/阿伯莉手甲.png", rarity: 4 },
                { name: "阿伯莉侦听芯片", icon: "image/gear/4/阿伯莉侦听芯片.png", rarity: 4 },
                { name: "阿伯莉传感芯片", icon: "image/gear/4/阿伯莉传感芯片.png", rarity: 4 }
              ]
            }
          ]
        }
      ]
    }
  });
})();
