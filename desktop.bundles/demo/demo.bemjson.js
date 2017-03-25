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
  scripts: [{ elem: 'js', url: 'demo.min.js' }],
  mods: { theme: 'islands' },
  content: [
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
                  content : 'Шаблонизатор для тех, кто ведёт веб-разработку в&nbsp;рамках БЭМ-методологии. В&nbsp;основе шаблонизатора лежат декларативные принципы из&nbsp;XSLT (eXtensible Stylesheet Language Transformations)'
                   }
                  ]
                },
                {
                  block : 'header',
                  elem : 'get',
                  tag : 'a',
                  attrs : {
                    href : 'http://bemxjst.ru'
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
                  content : 'Шаблонизатор позволяет формировать интерфейс на&nbsp;основе данных и&nbsp;гибко его настраивать.'
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
    }
  ]
};
