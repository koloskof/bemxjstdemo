module.exports = {
  block: 'page',
  title: 'bem-xjst',
  favicon: '/favicon.ico',
  head: [
    { elem: 'meta', attrs: { name: 'description', content: '' } },
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'demo.min.css' },
    { elem: 'css', url: 'http://codepen.io/bemdesign-blocks/pen/JWoGow.css' },
    { elem: 'css', url: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto"rel="stylesheet' }
  ],
  scripts: [
    { elem: 'js', url: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
    { elem: 'js', url: 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js' },
    { elem: 'js', url: 'demo.min.js' }
  ],
  mods: { theme: 'islands' },
  content: [

    /* Content */
    {
      block : 'header',
      content : [
        {
          block : 'row',
          content : [
            {
              elem : 'col',
              elemMods : { sw : 4 },
              content : [


              ]
            },
            {
              elem : 'col',
              elemMods : { sw : 8 },
              content : [
                {
                  block : 'header',
                  elem : 'title',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'inverse', size : 'xxxxl', indent : 'xl', weight : 'black', spacing : 'xl' },
                      content : 'bem-xjst'
                    }
                  ]
                },
                {
                  block : 'header',
                  elem : 'description',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'inverse', size : 'xl', indent : 'xxxl', weight : 'thin' },
                      content : 'Шаблонизатор для тех, кто ведёт веб-разработку в рамках БЭМ-методологии. В основе шаблонизатора лежат декларативные принципы из XSLT (eXtensible Stylesheet Language Transformations)'
                    }
                  ]
                },
                {
                  block : 'header',
                  elem : 'get',
                  tag : 'a',
                  attrs : {
                    href : 'https://bem.github.io/bem-xjst',
                    target : '_blank'
                  },
                  content : 'Написать шаблон'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block : 'info',
      content : [
        {
          block : 'row',
          content : [
            {
              elem : 'col',
              elemMods : { sw : 6 },
              content : [
                {
                  block : 'text',
                  mods : { size : 'xxxl', indent : 'xl', transform : 'uppercase', spacing : 'm', weight : 'bold',view : 'inverse', },
                  content : 'Data friendly design'
                },
                {
                  block : 'text',
                  mods : { size : 'xl', view : 'inverse', indent : 'xxxl', weight : 'thin' },
                  content : [
                    'Шаблонизатор позволяет формироватьинтерфейс  на основе данных и гибко его настраивать.',
                    'Шаблонизатор позволяет формироватьинтерфейс  на основе данных и гибко его настраивать.'
                  ]
                },
                {
                  block : 'advantages',
                  content : [
                    {
                      elem : 'row',
                      content : [
                        {
                          elem : 'col',
                          content : [
                            {
                              block : 'advantages',
                              elem : 'icon',
                              content : [
                                {
                                  block : 'material-icons',
                                  mods : { view : 'inverse' },
                                  content : 'transform'
                                }
                              ]
                            },
                            {
                              block : 'advantages',
                              elem : 'content',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                  content : 'Итеративность'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'ghost' },
                                  content : 'Пошаговое улучшение'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          content : [
                            {
                              block : 'advantages',
                              elem : 'icon',
                              content : [
                                {
                                  block : 'material-icons',
                                  content : 'timeline',
                                  mods : { view : 'inverse' },
                                }
                              ]
                            },
                            {
                              block : 'advantages',
                              elem : 'content',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                  content : 'Гибкость'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'ghost' },
                                  content : 'Отзывчиваость инрефейса'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'row',
                      content : [
                        {
                          elem : 'col',
                          content : [
                            {
                              block : 'advantages',
                              elem : 'icon',
                              content : [
                                {
                                  block : 'material-icons',
                                  mods : { view : 'inverse' },
                                  content : 'tonality'
                                }
                              ]
                            },
                            {
                              block : 'advantages',
                              elem : 'content',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                  content : 'Вариативность'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'ghost'  },
                                  content : 'Проверка условий'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'col',
                          content : [
                            {
                              block : 'advantages',
                              elem : 'icon',
                              content : [
                                {
                                  block : 'material-icons',
                                  mods : { view : 'inverse' },
                                  content : 'photo_size_select_small'
                                }
                              ]
                            },
                            {
                              block : 'advantages',
                              elem : 'content',
                              content : [
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                  content : 'Расширяемость'
                                },
                                {
                                  block : 'text',
                                  mods : { size : 'm', view : 'ghost' },
                                  content : 'Доопределение шаблонов'
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              elem : 'col',
              elemMods : { sw : 6 },
              content : [
                {
                  block : 'view',
                  content : [
                    {
                      elem : 'data'
                    },
                    {
                      elem : 'style'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block : 'content',
      content : [
        {
          block : 'title',
          content : [
            {
              block : 'row',
              content : [
                {
                  elem : 'col',
                  elemMods : { sw : 2 },
                },
                {
                  elem : 'col',
                  elemMods : { sw : 9 },
                  content : [
                    {
                      block : 'text',
                      mods : { size : 'xxxl', indent : 'xl', transform : 'uppercase', spacing : 'm', weight : 'bold', view : 'inverse', },
                      content : 'Пошаговый процесс шаблонизации'
                    },
                    {
                      block : 'text',
                      mods : { size : 'xl', view : 'inverse', indent : 'xxxl', weight : 'thin' },
                      content : 'Пишем шаблон на примере блока карточки пользователя, рассматривая основные возможности шаблонизатора.'
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          block : 'section',
          content : [
            {
              block : 'step',
              mods : { num : 1 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '1'
                            }
                          ]
                        }

                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'К элементу photo добавляем тег img'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }

                      ]
                    },

                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'Johnson & Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'ad',
                              content : 'add'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 2 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '2'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'К элементу photo добавляем атрибут src'
                        },

                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },

                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'Johnson & Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'ad',
                              content : 'add'
                            }
                          ]
                        }
                      ]
                    }

                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 3 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '3'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'Оборачиваем элемент photo в блок avatar'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  mix : { block : 'avatar' },
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'Johnson & Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'ad',
                              content : 'add'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 4 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '4'
                            }
                          ]
                        }

                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'К элементу company добавляем ковычки'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  mix : { block : 'avatar' },
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : '"Johnson & Johnson"'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'ad',
                              content : 'add'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 5 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '5'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'К элементу website миксуем блок link из библиотеки'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  mix : { block : 'avatar' },
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : '"Johnson & Johnson"'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'link', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'ad',
                              content : 'add'
                            }
                          ]
                        }

                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 6 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '6'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'Заменяем элемент add на блок add'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  mix : { block : 'avatar' },
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : '"Johnson & Johnson"'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'link', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'add'
                            }
                          ]
                        }

                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'step',
              mods : { num : 7 },
              content : [
                {
                  block : 'row',
                  content : [
                    {
                      elem : 'col',
                      elemMods : { sw : 2 },
                      content : [
                        {
                          block : 'num',
                          content : [
                            {
                              block : 'text',
                              mods : { view : 'inverse', size : 'xxxxl', weight : 'bold' },
                              content : '7'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 4 },
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'l', indent : 'm' },
                          content : 'Добавляем в еще одну ссылку'
                        },
                        {
                          block : 'changes',
                          content : [
                            {
                              elem : 'nums',
                              content : [
                                {
                                  elem : 'num',
                                  elemMods : { action : 'plus'},
                                  content :  '+5'
                                },
                                {
                                  elem : 'num',
                                  elemMods : { action : 'minus'},
                                  content :  '-5'
                                }
                              ]
                            },
                            {
                              elem : 'list',
                              content : [
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'plus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                                {
                                  elem : 'item',
                                  elemMods : { action : 'minus'}
                                },
                              ]
                            },
                            {
                              elem : 'comments',
                              content : '• 3 comments'
                            }
                          ]
                        },
                        {
                          block : 'text',
                          mods : { view : 'active', size : 'm', transform : 'uppercase', spacing : 's' },
                          content : 'Посмотреть изменения'
                        }
                      ]
                    },
                    {
                      elem : 'col',
                      elemMods : { sw : 5 },
                      content : [
                        {
                          block : 'user',
                          content : [
                            {
                              elem : 'content',
                              content : [
                                {
                                  elem : 'photo',
                                  tag : 'img',
                                  mix : { block : 'avatar' },
                                  attrs : {
                                    src : 'https://raw.githubusercontent.com/koloskof/bem-xjst-demo/master/asset/avatar2x.png'
                                  }
                                },
                                {
                                  elem : 'info',
                                  content : [
                                    {
                                      elem : 'name',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'xl' },
                                          content : 'John Johnson'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'company',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'primary', size : 'm' },
                                          content : '"Johnson & Johnson"'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'link', size : 'm' },
                                          content : 'http://johnson.co'
                                        }
                                      ]
                                    },
                                    {
                                      elem : 'website',
                                      content : [
                                        {
                                          block : 'text',
                                          mods : { view : 'link', size : 'm' },
                                          content : 'http://jonny.name'
                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              block : 'add'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block : 'screencast',
      content : [
        {
          block : 'row',
          content : [
            {
              elem : 'col',
              elemMods : { sw : 6 },
              content : [
                {
                  block : 'video',
                  content : [
                    {
                      elem : 'overlay',
                    },
                    {
                      elem : 'play',
                      content : [
                        {
                          block : 'material-icons',
                          mods : { view : 'inverse' },
                          content : 'play_arrow'
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              elem : 'col',
              elemMods : { sw : 6 },
              content : [
                {
                  block : 'screencast',
                  elem : 'content',
                  content : [
                    {
                      block : 'text',
                      mods : { size : 'xxxl', indent : 'l', transform : 'uppercase', spacing : 'm', weight : 'bold', view : 'inverse', },
                      content : 'Скринкаст'
                    },
                    {
                      block : 'text',
                      mods : { size : 'xl', view : 'inverse', indent : 'xxxl', weight : 'thin' },
                      content : 'Запись всего процесса верстки карточки пользователя на основе данных и Sketch файла.'
                    },
                    {
                      block : 'advantages',
                      content : [
                        {
                          elem : 'row',
                          content : [
                            {
                              elem : 'col',
                              content : [
                                {
                                  block : 'advantages',
                                  elem : 'icon',
                                  content : [
                                   {
                                      block : 'material-icons',
                                      mods : { view : 'inverse' },
                                      content : 'view_quilt'
                                    }
                                  ]
                                },
                                {
                                  block : 'advantages',
                                  elem : 'content',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                      content : 'Пример шаблона'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'ghost' },
                                      content : 'http://bit.ly/xjst-template'
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              elem : 'col',
                              content : [
                                {
                                  block : 'advantages',
                                  elem : 'icon',
                                  content : [
                                   {
                                      block : 'material-icons',
                                      mods : { view : 'inverse' },
                                      content : 'code'
                                    }
                                  ]
                                },
                                {
                                  block : 'advantages',
                                  elem : 'content',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                      content : 'Исходники Github'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'ghost' },
                                      content : 'http://bem.github.io/bem-xjst'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          elem : 'row',
                          content : [
                            {
                              elem : 'col',
                              content : [
                                {
                                  block : 'advantages',
                                  elem : 'icon',
                                  content : [
                                   {
                                      block : 'material-icons',
                                      mods : { view : 'inverse' },
                                      content : 'supervisor_account'
                                    }
                                  ]
                                },
                                {
                                  block : 'advantages',
                                  elem : 'content',
                                  content : [
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'inverse', weight : 'bold', indent : 'xxs', transform : 'uppercase', spacing : 'm' },
                                      content : 'Задать вопросы'
                                    },
                                    {
                                      block : 'text',
                                      mods : { size : 'm', view : 'ghost' },
                                      content : 'bemxjst@bem.info'
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
         ]
       }
      ]
    },
    {
      block : 'feedback',
      content : [
        {
          block : 'row',
          content : [
            {
              elem : 'col',
              elemMods : { sw : 2},
              content : [

              ]
            },
            {
              elem : 'col',
              elemMods : { sw : 8 },
              content : [
                {
                  block : 'text',
                  mods : { view : 'inverse', weight : 'bold', transform : 'uppercase', size : 'l', spacing : 'm', indent : 'm' },
                  content : 'Манифест'
                },
                {
                  block : 'text',
                  mods : { size : 'xl', view : 'inverse', weight: 'light', indent : 'xl' },
                  content : 'Как видите, достаточну большую часть работы шаблонизатор делает без вашего участия. Это позволяет вам больше экспериметировать при реализации интерфейса.'
                },
                 {
                  block : 'feedback',
                  elem : 'user',
                  content : [
                    {
                      block : 'feedback',
                      elem : 'photo',
                    },
                    {
                      block : 'text',
                      mods : { view : 'inverse', size : 'l', spacing : 's', indent : 'xs' },
                      content : 'Slava Oliyanchuk'
                    },
                    {
                      block : 'text',
                      mods : { view : 'disable', size : 'm', },
                      content : 'Майнтейнер bem-xjst'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      block : 'footer',
      content : [
        {
          elem : 'inner',
          content : [
            {
              block : 'row',
              content : [
                {
                  elem : 'col',
                  elemMods : { lw : 6, xl : 6, xxl : 6 },
                  content : [
                     {
                       block : 'bem',
                       content : [
                         {
                           block : 'text',
                          mods : { view : 'inverse', size : 'xxxl', weight : 'bold', transform : 'uppercase' },
                           content : 'Bem.info'
                         }
                       ]
                     },

                    /*
                    {
                      block : 'copy',
                      content : [
                        {
                          elem : 'logo',
                        },
                        {
                          elem : 'text',
                          content : [
                            {
                              block : 'text',
                              mods : { size : 'm', view : 'inverse' },
                              content : 'http://bem.info'
                            }
                          ]
                        }
                      ]
                    }
                    */
                  ]
                },
                {
                  elem : 'col',
                  elemMods : { lw : 6, xl : 6, xxl : 6 },
                  content : [
                    {
                      block : 'footer',
                      elem : 'social',
                      content : [
                        {
                          block : 'social',
                          content : [
                            {
                              elem : 'item',
                              elemMods : { view : 'facebook' },

                            },
                            {
                              elem : 'item',
                              elemMods : { view : 'twitter' },
                            },
                            {
                              elem : 'item',
                              elemMods : { view : 'mail' },
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    /* /Content */


    /* Overlay */
    {
      block : 'overlay',
      content : [
        {
          block : 'overlay-window',
          content : [
            {
              block : 'code-example',
              mods : { num : 1 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit'
                              },
                              content : [
                                " "
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit1'
                              },
                              content : [
                                "elem('photo')(\n  match(function (context, json) { return json.url; })(\n    tag()('img'),\n  )\n)"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              tag : 'xmp',
                              content : '<code>'
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              tag : 'xmp',
                              content : [
                                "<code>"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 2 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit21'
                              },
                              content : [
                                ""
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit22'
                              },
                              content : [
                                "elem('photo')(\n    match(function (context, json) { return json.url; })(\n    addAttrs()((context, json) => ({ href: json.url }))\n  )\n)"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit23'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit24'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 3 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit31'
                              },
                              content :
                              [
                                " "
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit32'
                              },
                              content : [
                                "elem('photo').wrap()(function() {\n  return {\n    block: 'avatar',\n    content: this.ctx\n  }\n})"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit33'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit34'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 4 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit41'
                              },
                              content : [
                                " "
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit42'
                              },
                              content : [
                                "elem('company')(\n  prependContent()('«'),\n  appendContent()('»')\n)"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit43'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit44'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 5 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit51'
                              },
                              content : [
                                ""
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit52'
                              },
                              content : [
                                "elem('website')(\n  tag()('a'),\n  mix()({ block: 'link' }),\n  addAttrs()((context, json) => ({ href: json.url })\n)"

                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit53'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit54'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 6 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'К элементу photo добавляем тег'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit61'
                              },
                              content :  [
                                ""
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit62'
                              },
                              content :
                              [
                                "elem('add').replace()({\n   block: 'add-to-friend'\n})"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit63'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit64'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              mods : { num : 7 },
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
                      content : 'BEMHTML'
                    },
                    {
                      elem : 'item',
                      content : 'HTML'
                    }
                  ]
                },
                {
                  elem : 'info',
                  content : [
                    {
                      block : 'text',
                      mods : { view : 'primary', size : 'xxl', indent : 's' },
                      content : 'Добавляем еще одну ссылку'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'xl' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
                  elemMods : { type : 'bemhtml'},
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit71'
                              },
                              content : [
                                ""
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit72'
                              },
                              content : [
                                "{\n  block : 'user', \n  url: 'john.png',\n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                /*
                {
                  elem : 'steps',
                  elemMods : { type : 'html' },
                  content : [
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Предыдущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit73'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem : 'item',
                      content : [
                        {
                          block : 'field',
                          content : [
                            {
                              elem : 'header',
                              content : [
                                {
                                  block : 'text',
                                  mods : { view : 'inverse', size : 'm', transform : 'uppercase', spacing : 's' },
                                  content : 'Текущий шаг'
                                }
                              ]
                            },
                            {
                              elem : 'content',
                              attrs : {
                                id : 'edit74'
                              },
                              content :
                              [
                                "{\n  block : 'user',\n  url: 'john.png', \n  name : 'John Johnson',\n  company : 'Johnson & Johnson',\n  website : 'http://johnson.co',\n  website_url : 'http://johnson.co',\n  online: true\n}"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
                */
              ]
            },
          ]
        }
      ]
    }
    /* /Overlay */

  ]
};
