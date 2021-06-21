import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from './../../../node_modules/rxjs';

@Injectable({
    providedIn: 'root'
})
export class UxHabitateServiceService {
    public domainsData = [
        {
            domainName: 'User Experience Design',
            domainDescription: 'User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability and function.',
            aspects: [
                {
                    aspectName: 'Empathize',
                    aspectDescription: 'The ability to gain insight into user’s emotions, needs, motivations, and frustrations. It enables us to understand not only the users but their immediate goals and wants through observing them and engaging with them. ',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'UX Research is a systematic study of target users to understand their problems and pain points. It focuses on understanding user behaviors, needs, and motivations through observation techniques, task analysis, and other methods. UX Research uncovers the problems of users and helps to find the appropriate solutions.',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20,
                                            id: 1
                                        },
                                        {
                                            name: 'Two User Questionnaire Template 2',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 25,
                                            tempFav: 30,
                                            id: 2
                                        },
                                        {
                                            name: 'Three User Questionnaire Template 3',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 5,
                                            tempFav: 10,
                                            id: 3
                                        },
                                        {
                                            name: 'Four User Questionnaire Template 4',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 5,
                                            tempFav: 10,
                                            id: 4
                                        },
                                        {
                                            name: 'Five User Questionnaire Template 5',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 5,
                                            tempFav: 10,
                                            id: 5
                                        },
                                        {
                                            name: 'Six User Questionnaire Template 6',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 5,
                                            tempFav: 10,
                                            id: 6
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Heuristic Method',
                                    templateDescription: 'The heuristic method is a usability inspection method for application/software that helps to identify usability problems in the user interface design. It specifically involves evaluators examining the interface and judging its compliance with recognized usability principles.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Process Mapping',
                                    templateDescription: 'Process mapping refers to activities involved in defining what a business entity does, who is responsible, to what standard a business process should be completed, what are business strategies and requirements and how the success of a business process can be determined.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Content Templates',
                                    templateDescription: 'A content template is a kind of outline for writers that cover all the information or images that should be included within a blog post, article, webpage or an application. This document should align with the overall marketing plan for the product or application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Stakeholder Analysis',
                                    templateDescription: 'Stakeholder analysis involves the process of identifying the major stakeholders or relevant and interested parties related to a product or service. This information is used to assess how the interests of those stakeholders should be addressed in a project plan, policy, program, or other action.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Define',
                    aspectDescription: 'This process includes putting together the information you have created and gathered during the Empathies stage. It involves analyzing your observations and synthesizing them in order to define the core problems that the users face.',
                    templates: [
                        {
                            templateGroup: 'Define One',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Define One Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define One Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define One Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define One Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define One Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: ' Define OneUser Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Define Two',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Define Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Define Three',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Define Three Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Three Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Three Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Define Three Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Ideate',
                    aspectDescription: 'The ideation phase involves generating and evaluating a range of solutions to solve the problem identified in the define stage.',
                    templates: [
                        {
                            templateGroup: 'Ideate One',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Ideate Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Ideate Two',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Ideate Two Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Two Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Two Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Two Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Ideate Three',
                            templateGroupDesp: 'Usability Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'Ideate Three Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Three Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Three Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Ideate Three Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Prototype',
                    aspectDescription: 'This stage involves testing the solutions developed in the earlier stages. It can be a simple paper prototype, or a detailed computer based prototype. In this stage we can form a vision of how the actual product will look like.',
                    templates: [
                        {
                            templateGroup: 'Prototype Research',
                            templateGroupDesp: 'Prototype Research description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Prototype Analysis',
                            templateGroupDesp: 'Prototype Analysis description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Prototype Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Test',
                    aspectDescription: 'User experience testing is the process of testing different aspects of user experience and interfaces to determine the best way for a product / application and its elements to interact with its targeted users/customer.',
                    templates: [
                        {
                            templateGroup: 'Test Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Test Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Test Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            domainName: 'Project Delivery',
            domainDescription: 'Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery Project Delivery.',
            aspects: [
                {
                    aspectName: 'Empathize',
                    aspectDescription: 'Gain insight into users and their needs through observing, engaging and empathizing to understand their pain points.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateGroupDesp: 'Prototype Strategy description',
                                    tempGrpImgUrl: '',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateGroupDesp: 'Prototype Strategy description',
                                    tempGrpImgUrl: '',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                // {
                                //   "templateName": "Case Study",
                                //   "templateGroupDesp": "Prototype Strategy description",
                                //   "tempGrpImgUrl": "",
                                //   "templateDescription": "Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.",
                                //   "templateImageUrl": "",
                                //   "templates": [
                                //     {
                                //       "name": "Marsh Project_User Questionnaire",
                                //       "imageUrl": "",
                                //       "templateinfo": "Insurance, E-Commerce | PDF, Excel, Word",
                                //       "tempDownloads": 15,
                                //       "tempFav": 20
                                //     }
                                //   ]
                                // },
                                // {
                                //   "templateName": "User Persona",
                                //   "templateGroupDesp": "Prototype Strategy description",
                                //   "tempGrpImgUrl": "",
                                //   "templateDescription": "A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.",
                                //   "templateImageUrl": "",
                                //   "templates": [
                                //     {
                                //       "name": "Marsh Project_User Questionnaire",
                                //       "imageUrl": "",
                                //       "templateinfo": "Insurance, E-Commerce | PDF, Excel, Word",
                                //       "tempDownloads": 15,
                                //       "tempFav": 20
                                //     }
                                //   ]
                                // },
                                // {
                                //   "templateName": "Journey Map",
                                //   "templateGroupDesp": "Prototype Strategy description",
                                //   "tempGrpImgUrl": "",
                                //   "templateDescription": "A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.",
                                //   "templateImageUrl": "",
                                //   "templates": [
                                //     {
                                //       "name": "Marsh Project_User Questionnaire",
                                //       "imageUrl": "",
                                //       "templateinfo": "Insurance, E-Commerce | PDF, Excel, Word",
                                //       "tempDownloads": 15,
                                //       "tempFav": 20
                                //     }
                                //   ]
                                // },
                                // {
                                //   "templateName": "User Stories",
                                //   "templateGroupDesp": "Prototype Strategy description",
                                //   "tempGrpImgUrl": "",
                                //   "templateDescription": "A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.",
                                //   "templateImageUrl": "",
                                //   "templates": [
                                //     {
                                //       "name": "Marsh Project_User Questionnaire",
                                //       "imageUrl": "",
                                //       "templateinfo": "Insurance, E-Commerce | PDF, Excel, Word",
                                //       "tempDownloads": 15,
                                //       "tempFav": 20
                                //     }
                                //   ]
                                // }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Define',
                    aspectDescription: 'Analyse your observations and synthesise them in order to define the core problems faced by the user.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Ideate',
                    aspectDescription: 'Generate and evaluate a range of solutions to solve the problem identified in the define stage.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Prototype',
                    aspectDescription: 'Demonstrate your ideas and enhance the best possible solution with the help of feedback.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        },
        {
            domainName: 'Sales & marketing',
            domainDescription: 'Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing Sales & marketing.',
            aspects: [
                {
                    aspectName: 'Empathize',
                    aspectDescription: 'Gain insight into users and their needs through observing, engaging and empathizing to understand their pain points.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Define',
                    aspectDescription: 'Analyse your observations and synthesise them in order to define the core problems faced by the user.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Ideate',
                    aspectDescription: 'Generate and evaluate a range of solutions to solve the problem identified in the define stage.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                },
                {
                    aspectName: 'Prototype',
                    aspectDescription: 'Demonstrate your ideas and enhance the best possible solution with the help of feedback.',
                    templates: [
                        {
                            templateGroup: 'UX Research',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User interviews are one of the most commonly used methods in user research. It focuses on a systematic study of target users and their requirements, to add realistic contexts and insights to design processes.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'Case studies are examples of design work and the process that the designer used to develop the product. Designers tell compelling stories in text and images to show how they handled problems. Such narratives showcase designers’ skills and ways of thinking and maximize their appeal.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'A User Persona is a fictional character created of a targeted user who will use the application/product. Personas can be created by talking to users and segmenting by various demographic and psychographic data to improve your product solutions.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Journey Map',
                                    templateDescription: 'A user journey map is a visual representation of a user’s experience. It is useful because it provides an opportunity to look at your website from the user’s point of view. This can be a key part in creating user experience design and optimization. It’s used for understanding and addressing needs and pain points of users/customers.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Stories',
                                    templateDescription: 'A user story describes something that the user wants to achieve by using the software/application/product. They originated as part of the Agile and Scrum development strategies, but for designers they mainly serve as reminders of user goals and a way to organize and prioritize how each screen is designed.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Usability Analysis',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            templateGroup: 'Content Strategy',
                            templateGroupDesp: 'Prototype Strategy description',
                            tempGrpImgUrl: '',
                            templateGroupList: [
                                {
                                    templateName: 'User Questionnaire',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Interview',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'Case Study',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                },
                                {
                                    templateName: 'User Persona',
                                    templateDescription: 'User questionnaires or survey questions aim to identify the areas of improvement in terms of the user experience of a product based on the opinions of a user. It helps to evaluate and analyze the current level of satisfaction with the experience and interface of their product/application.',
                                    templateImageUrl: '',
                                    templates: [
                                        {
                                            name: 'Marsh Project_User Questionnaire',
                                            imageUrl: '',
                                            templateinfo: 'Insurance, E-Commerce | PDF, Excel, Word',
                                            tempDownloads: 15,
                                            tempFav: 20
                                        }
                                    ]
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ];

    public domainId;
    // public userDetails;
    public phaseData;
    public categoryData;
    public subCategoryData;
    public selectedArtifact: Array<any> = [];
    public originalArtefactList;
    // public phaseList = [{
    //   'phaseId': 1,
    //   'domainId': 1,
    //   "domainName": 'User Experience Design',
    //   'phaseName': 'Empathize',
    //   'phaseDescription': 'The ability to gain insight into user’s emotions, needs, motivations, and frustrations. It enables us to understand not only the users but their immediate goals and wants through observing them and engaging with them.'
    // },
    // {
    //   'phaseId': 2,
    //   'domainId': 1,
    //   "domainName": 'User Experience Design',
    //   'phaseName': 'Define',
    //   'phaseDescription': 'This process includes putting together the information you have created and gathered during the Empathize stage. It involves analyzing your observations and synthesizing them in order to define the core problems that the users face.'
    // },
    // {
    //   'phaseId': 3,
    //   'domainId': 1,
    //   "domainName": 'User Experience Design',
    //   'phaseName': 'Ideate',
    //   'phaseDescription': 'The ideation phase involves generating and evaluating a range of solutions to solve the problem identified in the define stage.'
    // },
    // {
    //   'phaseId': 4,
    //   'domainId': 1,
    //   "domainName": 'User Experience Design',
    //   'phaseName': 'Prototype',
    //   'phaseDescription': 'This stage involves testing the solutions developed in the earlier stages. It can be a simple paper prototype, or a detailed computer based prototype. In this stage we can form a vision of how the actual product will look like.'
    // }, {
    //   'phaseId': 5,
    //   'domainId': 1,
    //   "domainName": 'User Experience Design',
    //   'phaseName': 'Test',
    //   'phaseDescription': 'User experience testing is the process of testing different aspects of user experience and interfaces to determine the best way for a product / application and its elements to interact with its targeted users/customer.'
    // },
    // {
    //   'phaseId': 6,
    //   'domainId': 2,
    //   'domainName': 'Project Delivery',
    //   'phaseName': 'Empathize',
    //   'phaseDescription': 'The ability to gain insight into user’s emotions, needs, motivations, and frustrations. It enables us to understand not only the users but their immediate goals and wants through observing them and engaging with them.'
    // },
    // {
    //   'phaseId': 7,
    //   'domainId': 3,
    //   'domainName': 'Sales & marketing',
    //   'phaseName': 'Empathize',
    //   'phaseDescription': 'The ability to gain insight into user’s emotions, needs, motivations, and frustrations. It enables us to understand not only the users but their immediate goals and wants through observing them and engaging with them.'
    // }]

    public phaseList = [{
        phaseId: 1,
        domainId: 1,
        domainName: 'User Experience Design',
        phaseName: 'Empathize',
        phaseDescription: 'The ability to gain insight into user’s emotions, needs, motivations, and frustrations. It enables us to understand not only the users but their immediate goals and wants through observing them and engaging with them.'
    },
    {
        phaseId: 2,
        domainId: 1,
        domainName: 'User Experience Design',
        phaseName: 'Define',
        phaseDescription: 'This process includes putting together the information you have created and gathered during the Empathize stage. It involves analyzing your observations and synthesizing them in order to define the core problems that the users face.'
    },
    {
        phaseId: 3,
        domainId: 1,
        domainName: 'User Experience Design',
        phaseName: 'Ideate',
        phaseDescription: 'The ideation phase involves generating and evaluating a range of solutions to solve the problem identified in the define stage.'
    },
    {
        phaseId: 4,
        domainId: 1,
        domainName: 'User Experience Design',
        phaseName: 'Prototype',
        phaseDescription: 'This stage involves testing the solutions developed in the earlier stages. It can be a simple paper prototype, or a detailed computer based prototype. In this stage we can form a vision of how the actual product will look like.'
    }, {
        phaseId: 5,
        domainId: 1,
        domainName: 'User Experience Design',
        phaseName: 'Test',
        phaseDescription: 'User experience testing is the process of testing different aspects of user experience and interfaces to determine the best way for a product / application and its elements to interact with its targeted users/customer.'
    },
    {
        phaseId: 6,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Case Studies',
        phaseDescription: 'A process or record of research into the development of a particular website, application, etc., over a period of time.'
    },
    {
        phaseId: 7,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Project Template',
        phaseDescription: 'Project templates enable you to re-use the structure and content of existing projects, including project pages, custom tracker fields and workflow definitions.'
    },
    {
        phaseId: 8,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Proof of Concept',
        phaseDescription: 'A proof of concept would show whether an idea is feasible and verify that certain concepts or theories have the potential for real-world applocation.'
    },
    {
        phaseId: 9,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Request for Proposal',
        phaseDescription: 'A request for proposal is a business document that announces and provides details about a project, as well as solicits bids from contractors who will help complete the project.'
    },
    {
        phaseId: 10,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Revenue Template',
        phaseDescription: 'Revenue Template is a ready-to-use template that helps to analyse and report the revenues, expenses and the resulting profits or losses of an organisation, for a specific reporting period.'
    },
    {
        phaseId: 11,
        domainId: 2,
        domainName: 'Project Delivery',
        phaseName: 'Estimations Template',
        phaseDescription: 'Estimation Template helps you get cost estimates for various elements of a project within a given timeline easily and accurately.'
    },
    {
        phaseId: 12,
        domainId: 3,
        domainName: 'Sales & marketing',
        phaseName: 'Case Studies',
        phaseDescription: 'A process or record of research into the development of a particular website, application, etc., over a period of time.'
    },
    {
        phaseId: 13,
        domainId: 3,
        domainName: 'Sales & marketing',
        phaseName: 'Presentation Templates',
        phaseDescription: 'Presentation Templates are reusable templates into which you put your own information. These templates are designed to give your slide presentations a consistent and structured experience.'
    },
    {
        phaseId: 14,
        domainId: 3,
        domainName: 'Sales & marketing',
        phaseName: 'LTI Branding Guidelines',
        phaseDescription: 'Branding guidelines are essentially a rule book on how to communicate your brand. They lay out all the visual details, as well as important notes about the company\'s voice, tone and messaging.'
    },
    {
        phaseId: 15,
        domainId: 3,
        domainName: 'Sales & marketing',
        phaseName: 'Infographics',
        phaseDescription: 'An infographic is a visual representaion of information or data. it is a collection of imagery, charts and minimal text that gives an easy-to-understand overview of a topic.'
    },
    {
        phaseId: 16,
        domainId: 3,
        domainName: 'Sales & marketing',
        phaseName: 'Illustrations',
        phaseDescription: 'Illustrations are visual interpretation of a particular concept, text or process. The primary purpose of an illustration is to get the message across faster than text.'
    }];

    // notifier for domain name changed
    private domainnameSource = new BehaviorSubject<string>('');
    domainname = this.domainnameSource.asObservable();

    // notifier for aspect is selcted
    private aspectnameSource = new BehaviorSubject<string>('');
    aspectname = this.aspectnameSource.asObservable();

    // notifier for template Group is selcted
    private templateGroupSource = new BehaviorSubject<string>('');
    templateGroupname = this.templateGroupSource.asObservable();

    // notifier for show more is clicked
    private showMoreSource = new BehaviorSubject<string>('');
    showmorename = this.showMoreSource.asObservable();

    // notifier for template content name changed
    private templateContentSource = new BehaviorSubject<string>('');
    templatename = this.templateContentSource.asObservable();

    private artefactnameSource = new BehaviorSubject<string>('');
    artefactname = this.artefactnameSource.asObservable();

    public removeArtifactEvent: Subject<any> = new Subject();

    selectedArtifactsShare(isChecked: boolean, newId: number){
        if (isChecked){
            this.selectedArtifact.push(newId);
        }else{
            const index = this.selectedArtifact.findIndex(x => x.value == newId);
            this.selectedArtifact.splice(index, 1);
        }
        this.removeArtifactEvent.next(this.selectedArtifact);
    }
    emptyArtifactsShare(){
        this.selectedArtifact = [];
        this.removeArtifactEvent.next(this.selectedArtifact);
    }

    constructor() { }
    // notifier for domain name changed
    changeDomainname(domainname: string) {
        this.domainnameSource.next(domainname);
    }
    // notifier for aspect is selcted
    changeAspectname(aspectname: string) {
        this.aspectnameSource.next(aspectname);
    }
    // notifier for template group is selcted
    changeGroupname(templateGroupname: any) {
        this.templateGroupSource.next(templateGroupname);
    }
    // notifier for template group is selcted
    changeShowmorename(showmorename: any) {
        this.showMoreSource.next(showmorename);
    }
    // notifier for template content name changed
    changeTemplatename(templatename: any) {
        this.templateContentSource.next(templatename);
    }
    // notifier for domain name changed
    changeArtefactname(artefactname: any) {
        this.artefactnameSource.next(artefactname);
    }
}
