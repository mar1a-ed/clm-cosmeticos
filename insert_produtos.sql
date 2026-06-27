-- =====================================================================
-- INSERT de exemplo para a tabela "produto" (PostgreSQL)
-- 3 produtos para cada uma das 10 categorias do enum Categoria
-- Total: 30 produtos
--
-- AJUSTE NECESSÁRIO: se o nome da sua tabela ou de alguma coluna for
-- diferente (ex: "produtos" no plural, ou "tipo_produto" sem underscore),
-- troque aqui antes de executar.
--
-- Os valores de categoria e tipo_produto são gravados como TEXT,
-- igual ao nome do enum em Java (ex: 'MAQUIAGEM', 'BASE'), que é o
-- comportamento padrão do Hibernate/JPA com @Enumerated(EnumType.STRING).
--
-- SOBRE AS IMAGENS:
-- Usamos o serviço placehold.co, que gera uma imagem de verdade (não é
-- um link quebrado) com o nome do produto escrito nela. É só um espaço
-- reservado visual: serve para testar o layout sem depender de fotos
-- de terceiros. Veja a explicação após o script sobre como trocar por
-- fotos reais do produto de forma correta (sem risco de direitos de
-- imagem ou link instável de loja).
-- =====================================================================

INSERT INTO produto (id, nome, descricao, preco, estoque, imagem, categoria, tipo_produto)
VALUES
-- ===================== MAQUIAGEM =====================
(1, 'Base Líquida Matte HD', 'Base de alta cobertura com acabamento matte e longa duração.', 49.90, 35, 'https://placehold.co/400x400/f5d6c6/4a2c2a?text=Base+Matte+HD', 'MAQUIAGEM', 'BASE'),
(2, 'Batom Líquido Vermelho Clássico', 'Batom líquido de secagem rápida e cor intensa.', 29.90, 50, 'https://placehold.co/400x400/c41e3a/ffffff?text=Batom+Vermelho', 'MAQUIAGEM', 'BATOM'),
(3, 'Máscara de Cílios Volume Extremo', 'Máscara que alonga e dá volume sem borrar.', 34.90, 40, 'https://placehold.co/400x400/1a1a1a/ffffff?text=Mascara+Cilios', 'MAQUIAGEM', 'MASCARA_DE_CILIOS'),

-- ===================== CUIDADOS_COM_A_PELE =====================
(4, 'Hidratante Facial Hialurônico', 'Hidratação profunda com ácido hialurônico para todos os tipos de pele.', 39.90, 60, 'https://placehold.co/400x400/d6ecf0/2a4a4a?text=Hidratante+Facial', 'CUIDADOS_COM_A_PELE', 'HIDRATANTE_FACIAL'),
(5, 'Sérum Vitamina C 20%', 'Sérum antioxidante que uniformiza o tom da pele.', 59.90, 45, 'https://placehold.co/400x400/fff3cd/8a6d1a?text=Serum+Vitamina+C', 'CUIDADOS_COM_A_PELE', 'SERUM'),
(6, 'Sabonete Facial Espuma Suave', 'Limpeza facial sem ressecar a pele.', 24.90, 70, 'https://placehold.co/400x400/e8f4f8/2a5a6a?text=Sabonete+Facial', 'CUIDADOS_COM_A_PELE', 'SABONETE_FACIAL'),

-- ===================== PERFUMARIA =====================
(7, 'Perfume Floral Élégance 100ml', 'Fragrância floral sofisticada com notas de jasmim.', 189.90, 20, 'https://placehold.co/400x400/f0d9e8/5a2a4a?text=Perfume+Elegance', 'PERFUMARIA', 'PERFUME'),
(8, 'Colônia Cítrica Fresh 200ml', 'Colônia refrescante com notas cítricas, ideal para o dia a dia.', 79.90, 30, 'https://placehold.co/400x400/fff0c2/8a6a1a?text=Colonia+Fresh', 'PERFUMARIA', 'COLONIA'),
(9, 'Body Splash Frutas Vermelhas', 'Spray corporal perfumado de longa fixação.', 34.90, 55, 'https://placehold.co/400x400/f7d6dc/8a2a3a?text=Body+Splash', 'PERFUMARIA', 'BODY_SPLASH'),

-- ===================== PROTETOR_SOLAR =====================
(10, 'Protetor Solar Facial FPS 60', 'Proteção facial com toque seco e sem oleosidade.', 54.90, 50, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Facial+60', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_FACIAL'),
(11, 'Protetor Solar Corporal FPS 30', 'Proteção corporal resistente à água.', 44.90, 65, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Corporal+30', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_CORPORAL'),
(12, 'Protetor Solar Facial FPS 80 Toque Seco', 'Alta proteção com acabamento invisível.', 64.90, 30, 'https://placehold.co/400x400/fff3e0/8a5a1a?text=Protetor+Facial+80', 'PROTETOR_SOLAR', 'PROTETOR_SOLAR_FACIAL'),

-- ===================== ESMALTERIA =====================
(13, 'Esmalte Vermelho Paixão', 'Esmalte cremoso de alto brilho e longa duração.', 9.90, 100, 'https://placehold.co/400x400/c41e3a/ffffff?text=Esmalte+Vermelho', 'ESMALTERIA', 'ESMALTE'),
(14, 'Esmalte Nude Elegance', 'Tom nude versátil para o dia a dia.', 9.90, 90, 'https://placehold.co/400x400/e8d4c0/5a4530?text=Esmalte+Nude', 'ESMALTERIA', 'ESMALTE'),
(15, 'Removedor de Esmalte sem Acetona', 'Remove esmalte sem ressecar as unhas.', 14.90, 80, 'https://placehold.co/400x400/dbe9f5/2a4a6a?text=Removedor+Esmalte', 'ESMALTERIA', 'REMOVEDOR_DE_ESMALTE'),

-- ===================== TRATAMENTO_FACIAL =====================
(16, 'Creme Anti-Idade Noturno', 'Reduz linhas finas e estimula a renovação celular durante a noite.', 89.90, 25, 'https://placehold.co/400x400/e0d6f0/4a2a6a?text=Anti-Idade+Noturno', 'TRATAMENTO_FACIAL', 'ANTI_IDADE'),
(17, 'Sérum Clareador Facial', 'Atua em manchas e uniformiza o tom da pele.', 74.90, 30, 'https://placehold.co/400x400/fff3cd/8a6d1a?text=Clareador+Facial', 'TRATAMENTO_FACIAL', 'CLAREADOR_FACIAL'),
(18, 'Creme Anti-Idade Olheiras', 'Tratamento específico para a área dos olhos.', 69.90, 28, 'https://placehold.co/400x400/e0d6f0/4a2a6a?text=Anti-Idade+Olheiras', 'TRATAMENTO_FACIAL', 'ANTI_IDADE'),

-- ===================== CORPO_E_BANHO =====================
(19, 'Hidratante Corporal Manteiga de Karité', 'Hidratação intensa para peles secas.', 32.90, 60, 'https://placehold.co/400x400/f0e4d0/6a4a2a?text=Hidratante+Karite', 'CORPO_E_BANHO', 'HIDRATANTE_CORPORAL'),
(20, 'Óleo de Banho Lavanda', 'Óleo relaxante que hidrata durante o banho.', 38.90, 40, 'https://placehold.co/400x400/e6dcf2/4a3a6a?text=Oleo+Lavanda', 'CORPO_E_BANHO', 'OLEO_DE_BANHO'),
(21, 'Hidratante Corporal Coco', 'Loção hidratante de absorção rápida com fragrância de coco.', 29.90, 55, 'https://placehold.co/400x400/f5f0e0/6a5a2a?text=Hidratante+Coco', 'CORPO_E_BANHO', 'HIDRATANTE_CORPORAL'),

-- ===================== ACESSORIOS_DE_BELEZA =====================
(22, 'Pincel para Base Profissional', 'Pincel macio de cerdas sintéticas para aplicação uniforme.', 19.90, 70, 'https://placehold.co/400x400/d8d8d8/3a3a3a?text=Pincel+Base', 'ACESSORIOS_DE_BELEZA', 'PINCEL'),
(23, 'Esponja de Maquiagem Multifuncional', 'Esponja para base, pó e corretivo, formato gota.', 14.90, 90, 'https://placehold.co/400x400/f7d6dc/8a2a3a?text=Esponja+Maquiagem', 'ACESSORIOS_DE_BELEZA', 'ESPONJA_DE_MAQUIAGEM'),
(24, 'Necessaire de Viagem Compacta', 'Necessaire impermeável com diversos compartimentos.', 49.90, 35, 'https://placehold.co/400x400/d0e0e8/2a4a5a?text=Necessaire+Viagem', 'ACESSORIOS_DE_BELEZA', 'NECESSAIRE'),

-- ===================== KITS_E_PRESENTES =====================
(25, 'Kit Presente Skincare Essencial', 'Kit com hidratante, sérum e sabonete facial.', 119.90, 20, 'https://placehold.co/400x400/e8f4f8/2a5a6a?text=Kit+Skincare', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),
(26, 'Kit Presente Perfumaria Deluxe', 'Kit com perfume e body splash combinados.', 159.90, 15, 'https://placehold.co/400x400/f0d9e8/5a2a4a?text=Kit+Perfumaria', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),
(27, 'Kit Maquiagem Básica', 'Kit com base, batom e máscara de cílios.', 99.90, 25, 'https://placehold.co/400x400/f5d6c6/4a2c2a?text=Kit+Maquiagem', 'KITS_E_PRESENTES', 'KIT_PROMOCIONAL'),

-- ===================== PRODUTOS_NATURAIS =====================
(28, 'Hidratante Facial Vegano Aloe Vera', 'Hidratante 100% vegano à base de aloe vera.', 42.90, 40, 'https://placehold.co/400x400/dcf0d8/2a5a2a?text=Hidratante+Vegano', 'PRODUTOS_NATURAIS', 'COSMETICO_VEGANO'),
(29, 'Sabonete Orgânico de Lavanda', 'Sabonete artesanal orgânico, livre de químicos agressivos.', 22.90, 50, 'https://placehold.co/400x400/e6dcf2/4a3a6a?text=Sabonete+Organico', 'PRODUTOS_NATURAIS', 'COSMETICO_ORGANICO'),
(30, 'Óleo Corporal Vegano Amêndoas', 'Óleo corporal vegano nutritivo de amêndoas doces.', 36.90, 38, 'https://placehold.co/400x400/f0e4d0/6a4a2a?text=Oleo+Amendoas', 'PRODUTOS_NATURAIS', 'COSMETICO_VEGANO');
