        /* Анимации */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideIn {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
        }

        /* Медиа-запросы для адаптивности */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            nav {
                flex-direction: column;
                gap: 15px;
            }

            .buttons a, .donate-section button {
                width: 100%;
                max-width: 300px;
            }
        }
