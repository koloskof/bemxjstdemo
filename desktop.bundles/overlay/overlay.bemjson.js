module.exports = {
  block: 'page',
  title: 'bem-xjst',
  favicon: '/favicon.ico',
  head: [
    { elem: 'meta', attrs: { name: 'description', content: '' } },
    { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
    { elem: 'css', url: 'overlay.min.css' },
    { elem: 'css', url: 'http://codepen.io/bemdesign-blocks/pen/JWoGow.css' },
    { elem: 'css', url: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    { elem: 'css', url: 'https://fonts.googleapis.com/css?family=Roboto"rel="stylesheet' }
  ],
  scripts: [{ elem: 'js', url: 'overlay.min.js' }],
  mods: { theme: 'islands' },
  content: [
    {
      block : 'overlay',
      content : [
        {
          block : 'overlay-window',
          content : [
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '1 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next',
                    },
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'К элементу photo добавляем атрибут src'
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '2 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next'
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'Оборачиваем элемент photo в блок avatar'
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '3 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next',
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'К элементу company добавляем ковычки'
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '4 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next'
                    }
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'К элементу website миксуем блок link из библиотеки'
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '5 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next',
                    },
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'Заменяем элемент add на блок add'
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '6 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next',
                    },
                  ]
                }
              ]
            },
            {
              block : 'code-example',
              content : [
                {
                  elem : 'close'
                },
                {
                  block : 'code-toggle',
                  content : [
                    {
                      elem : 'item',
                      content : 'BEM-HTML'
                    },
                    {
                      elem : 'item',
                      elemMods : { state : 'active' },
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
                      content : 'Добавляем в еще одну ссылку'
                    },
                    {
                      block : 'text',
                      mods : { view : 'secondary', size : 'm', indent : 'm' },
                      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel dolore recusandae eum quia id laudantium est officia excepturi, obcaecati eaque, quibusdam, iste fugiat quo nemo ut. Architecto, cumque, inventore.'
                    }
                  ]
                },
                {
                  elem : 'steps',
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
                },
                {
                  block : 'code-nav',
                  content : [
                    {
                      elem : 'prev',
                    },
                    {
                      elem : 'steps',
                      content : [
                        {
                          block : 'text',
                          mods : { view : 'inverse', size : 'xl' },
                          content : '7 из 7 шагов'
                        }
                      ]
                    },
                    {
                      elem : 'next'
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
