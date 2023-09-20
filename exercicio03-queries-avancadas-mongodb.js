// 1. Recupere um apanhado contendo todos os valores distintos da chave “ NOME_TURNO_CURSO_BOLSA ”, use a função distinct() para isso.

db.users.distinct("NOME_TURNO_CURSO_BOLSA")

// 'A Distancia', 'Integral', 'Matutino', 'Noturno', 'Vespertino'

// 2. Recupere a quantidade total do apanhado contendo todos os valores distintos da chave “ NOME_TURNO_CURSO_BOLSA ”.

db.users.distinct("NOME_TURNO_CURSO_BOLSA").length

// 5

// 3. Recupere a quantidade total do apanhado contendo todos os valores distintos da chave “ NOME_CURSO_BOLSA ”.

db.users.distinct("NOME_CURSO_BOLSA").length

// 3620

// 4. Recupere um apanhado de documentos pela chave instituições de ensino ( NOME_IES_BOLSA ) através das seguintes regras (respeite o case-sensitive dos tópicos abaixo):
// a. Documentos que contenha em qualquer parte do campo o valor “ CEN ”.

db.users.find({ NOME_IES_BOLSA: { $regex: /CEN/ } })

// '6504c39322a4da449a114459', '6504c39322a4da449a11445a', '6504c39322a4da449a11445b', '6504c39322a4da449a11445c', '6504c39322a4da449a11445d', '6504c39322a4da449a114467', '6504c39322a4da449a114468', '6504c39322a4da449a114469', '6504c39322a4da449a11446a', '6504c39322a4da449a11446c', '6504c39322a4da449a114470', '6504c39322a4da449a114482', '6504c39322a4da449a114484', '6504c39322a4da449a114486', '6504c39322a4da449a114485', '6504c39322a4da449a11448a', '6504c39322a4da449a114489', '6504c39322a4da449a114488', '6504c39322a4da449a11448b', '6504c39322a4da449a114487'

// b. Documentos que contenha em qualquer parte do campo o valor “ UNI ”.

db.users.find({ NOME_IES_BOLSA: { $regex: /UNI/ } })

// [{"_id":{"$oid":"6504c39322a4da449a1142fd"}},{"_id":{"$oid":"6504c39322a4da449a114300"}},{"_id":{"$oid":"6504c39322a4da449a1142ff"}},{"_id":{"$oid":"6504c39322a4da449a1142fe"}},{"_id":{"$oid":"6504c39322a4da449a114302"}},{"_id":{"$oid":"6504c39322a4da449a114304"}},{"_id":{"$oid":"6504c39322a4da449a114303"}},{"_id":{"$oid":"6504c39322a4da449a114301"}},{"_id":{"$oid":"6504c39322a4da449a114305"}},{"_id":{"$oid":"6504c39322a4da449a114306"}},{"_id":{"$oid":"6504c39322a4da449a11430a"}},{"_id":{"$oid":"6504c39322a4da449a114309"}},{"_id":{"$oid":"6504c39322a4da449a11430b"}},{"_id":{"$oid":"6504c39322a4da449a114307"}},{"_id":{"$oid":"6504c39322a4da449a11430c"}},{"_id":{"$oid":"6504c39322a4da449a11430d"}},{"_id":{"$oid":"6504c39322a4da449a11430e"}},{"_id":{"$oid":"6504c39322a4da449a114308"}},{"_id":{"$oid":"6504c39322a4da449a11430f"}},{"_id":{"$oid":"6504c39322a4da449a114310"}}]

// c. Documentos que contenha em qualquer parte do campo o valor “ uni ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/uni/] } })

// 0

// d. Documentos que contenha em qualquer parte do campo o valor “ uti ”;

db.users.find({ NOME_IES_BOLSA: { $in: [/uti/] } })

// 0

// e. Documentos que comece com o valor “ UNI ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/^UNI/] } })

// [{"_id":{"$oid":"6504c39322a4da449a1142fd"}},{"_id":{"$oid":"6504c39322a4da449a114300"}},{"_id":{"$oid":"6504c39322a4da449a1142ff"}},{"_id":{"$oid":"6504c39322a4da449a1142fe"}},{"_id":{"$oid":"6504c39322a4da449a114302"}},{"_id":{"$oid":"6504c39322a4da449a114304"}},{"_id":{"$oid":"6504c39322a4da449a114303"}},{"_id":{"$oid":"6504c39322a4da449a114301"}},{"_id":{"$oid":"6504c39322a4da449a114305"}},{"_id":{"$oid":"6504c39322a4da449a114306"}},{"_id":{"$oid":"6504c39322a4da449a11430a"}},{"_id":{"$oid":"6504c39322a4da449a114309"}},{"_id":{"$oid":"6504c39322a4da449a11430b"}},{"_id":{"$oid":"6504c39322a4da449a114307"}},{"_id":{"$oid":"6504c39322a4da449a11430c"}},{"_id":{"$oid":"6504c39322a4da449a11430d"}},{"_id":{"$oid":"6504c39322a4da449a11430e"}},{"_id":{"$oid":"6504c39322a4da449a114308"}},{"_id":{"$oid":"6504c39322a4da449a11430f"}},{"_id":{"$oid":"6504c39322a4da449a114310"}}]

// f. Documentos que comece com o valor “ INS ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/^INS/] } })

// [{"_id":{"$oid":"6504c39322a4da449a115ca6"}},{"_id":{"$oid":"6504c39322a4da449a115ca7"}},{"_id":{"$oid":"6504c39322a4da449a115cae"}},{"_id":{"$oid":"6504c39322a4da449a115cb7"}},{"_id":{"$oid":"6504c39322a4da449a115cb2"}},{"_id":{"$oid":"6504c39322a4da449a115cb8"}},{"_id":{"$oid":"6504c39322a4da449a115cbb"}},{"_id":{"$oid":"6504c39322a4da449a115cc5"}},{"_id":{"$oid":"6504c39322a4da449a115cc4"}},{"_id":{"$oid":"6504c39322a4da449a115cc6"}},{"_id":{"$oid":"6504c39322a4da449a115cc7"}},{"_id":{"$oid":"6504c39322a4da449a115cc8"}},{"_id":{"$oid":"6504c39322a4da449a115cc9"}},{"_id":{"$oid":"6504c39322a4da449a115cc3"}},{"_id":{"$oid":"6504c39322a4da449a115eb6"}},{"_id":{"$oid":"6504c39322a4da449a115eb7"}},{"_id":{"$oid":"6504c39322a4da449a115eb8"}},{"_id":{"$oid":"6504c39322a4da449a115eb9"}},{"_id":{"$oid":"6504c39322a4da449a115eba"}},{"_id":{"$oid":"6504c39322a4da449a115ebb"}}]

// g. Documentos que comece com o valor “ uNI ”;

db.users.find({ NOME_IES_BOLSA: { $in: [/^uNI/] } })

// 0

// h. Documentos que termine com o valor “ OES ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/OES$/] } })

// [{"_id":{"$oid":"6504c39322a4da449a1142fd"}},{"_id":{"$oid":"6504c39322a4da449a114300"}},{"_id":{"$oid":"6504c39322a4da449a1142ff"}},{"_id":{"$oid":"6504c39322a4da449a1142fe"}},{"_id":{"$oid":"6504c39322a4da449a11430a"}},{"_id":{"$oid":"6504c39322a4da449a114309"}},{"_id":{"$oid":"6504c39322a4da449a11430b"}},{"_id":{"$oid":"6504c39322a4da449a114307"}},{"_id":{"$oid":"6504c39322a4da449a11430c"}},{"_id":{"$oid":"6504c39322a4da449a11430d"}},{"_id":{"$oid":"6504c39322a4da449a11430e"}},{"_id":{"$oid":"6504c39322a4da449a114308"}},{"_id":{"$oid":"6504c39322a4da449a11430f"}},{"_id":{"$oid":"6504c39322a4da449a114310"}},{"_id":{"$oid":"6504c39322a4da449a114311"}},{"_id":{"$oid":"6504c39322a4da449a114312"}},{"_id":{"$oid":"6504c39322a4da449a114313"}},{"_id":{"$oid":"6504c39322a4da449a114314"}},{"_id":{"$oid":"6504c39322a4da449a114315"}},{"_id":{"$oid":"6504c39322a4da449a114316"}}]

// i. Documentos que contenha em qualquer parte do campo o valor “ CEN ” e “ uti ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/CEN/, /uti/] } })

// [{"_id":{"$oid":"6504c39322a4da449a114459"}},{"_id":{"$oid":"6504c39322a4da449a11445a"}},{"_id":{"$oid":"6504c39322a4da449a11445b"}},{"_id":{"$oid":"6504c39322a4da449a11445c"}},{"_id":{"$oid":"6504c39322a4da449a11445d"}},{"_id":{"$oid":"6504c39322a4da449a114467"}},{"_id":{"$oid":"6504c39322a4da449a114468"}},{"_id":{"$oid":"6504c39322a4da449a114469"}},{"_id":{"$oid":"6504c39322a4da449a11446a"}},{"_id":{"$oid":"6504c39322a4da449a11446c"}},{"_id":{"$oid":"6504c39322a4da449a114470"}},{"_id":{"$oid":"6504c39322a4da449a114482"}},{"_id":{"$oid":"6504c39322a4da449a114484"}},{"_id":{"$oid":"6504c39322a4da449a114486"}},{"_id":{"$oid":"6504c39322a4da449a114485"}},{"_id":{"$oid":"6504c39322a4da449a11448a"}},{"_id":{"$oid":"6504c39322a4da449a114489"}},{"_id":{"$oid":"6504c39322a4da449a114488"}},{"_id":{"$oid":"6504c39322a4da449a11448b"}},{"_id":{"$oid":"6504c39322a4da449a114487"}}]

// j. Documentos que contenha em qualquer parte do campo o valor “ tri ” e “ TOd ”.

db.users.find({ NOME_IES_BOLSA: { $in: [/tri/, /TOd/] } })

// 0

// 5. Recupere um apanhado de documentos em ordem crescente através da chave “ ANO_CONCESSAO_BOLSA ”.

db.users.find().sort({ ANO_CONCESSAO_BOLSA: 1 })

// [{"_id":{"$oid":"6504c39322a4da449a1142fd"}},{"_id":{"$oid":"6504c39322a4da449a114300"}},{"_id":{"$oid":"6504c39322a4da449a1142ff"}},{"_id":{"$oid":"6504c39322a4da449a1142fe"}},{"_id":{"$oid":"6504c39322a4da449a114302"}},{"_id":{"$oid":"6504c39322a4da449a114304"}},{"_id":{"$oid":"6504c39322a4da449a114303"}},{"_id":{"$oid":"6504c39322a4da449a114301"}},{"_id":{"$oid":"6504c39322a4da449a114305"}},{"_id":{"$oid":"6504c39322a4da449a114306"}},{"_id":{"$oid":"6504c39322a4da449a11430a"}},{"_id":{"$oid":"6504c39322a4da449a114309"}},{"_id":{"$oid":"6504c39322a4da449a11430b"}},{"_id":{"$oid":"6504c39322a4da449a114307"}},{"_id":{"$oid":"6504c39322a4da449a11430c"}},{"_id":{"$oid":"6504c39322a4da449a11430d"}},{"_id":{"$oid":"6504c39322a4da449a11430e"}},{"_id":{"$oid":"6504c39322a4da449a114308"}},{"_id":{"$oid":"6504c39322a4da449a11430f"}},{"_id":{"$oid":"6504c39322a4da449a114310"}}]

// 6. Recupere um apanhado de documentos em ordem decrescente através da chave “ idade ”.

db.users.find().sort({ idade: -1 })

// [{"_id":{"$oid":"6504c3a722a4da449a221728"}},{"_id":{"$oid":"6504c3a722a4da449a22632f"}},{"_id":{"$oid":"6504c39422a4da449a124949"}},{"_id":{"$oid":"6504c39422a4da449a128a8f"}},{"_id":{"$oid":"6504c39422a4da449a128c2a"}},{"_id":{"$oid":"6504c39422a4da449a124d25"}},{"_id":{"$oid":"6504c3ab22a4da449a2553a9"}},{"_id":{"$oid":"6504c39422a4da449a12bdb8"}},{"_id":{"$oid":"6504c39422a4da449a12bdf1"}},{"_id":{"$oid":"6504c39422a4da449a12be7a"}},{"_id":{"$oid":"6504c39422a4da449a12d47d"}},{"_id":{"$oid":"6504c39522a4da449a12e1b9"}},{"_id":{"$oid":"6504c39522a4da449a12e654"}},{"_id":{"$oid":"6504c39522a4da449a12e8c0"}},{"_id":{"$oid":"6504c39522a4da449a12ee0e"}},{"_id":{"$oid":"6504c39522a4da449a12ffd6"}},{"_id":{"$oid":"6504c39522a4da449a130fb6"}},{"_id":{"$oid":"6504c39522a4da449a1311a5"}},{"_id":{"$oid":"6504c39522a4da449a1319b0"}},{"_id":{"$oid":"6504c39522a4da449a131cd0"}}]

// 7. Recupere os estudantes do turno “Vespertino” ( NOME_TURNO_CURSO_BOLSA ) que estavam participando do programa no
// ano de “2009” ( ANO_CONCESSAO_BOLSA ).

db.users.find({ NOME_TURNO_CURSO_BOLSA: "Vespertino", ANO_CONCESSAO_BOLSA: 2009 })

// [{"_id":{"$oid":"6504c39b22a4da449a17e6d3"}},{"_id":{"$oid":"6504c39b22a4da449a17e709"}},{"_id":{"$oid":"6504c39b22a4da449a17e70a"}},{"_id":{"$oid":"6504c39b22a4da449a17e784"}},{"_id":{"$oid":"6504c39b22a4da449a17e785"}},{"_id":{"$oid":"6504c39b22a4da449a17ea7b"}},{"_id":{"$oid":"6504c39b22a4da449a17ea7c"}},{"_id":{"$oid":"6504c39b22a4da449a17ea7d"}},{"_id":{"$oid":"6504c39b22a4da449a17ea7e"}},{"_id":{"$oid":"6504c39b22a4da449a17ea95"}},{"_id":{"$oid":"6504c39b22a4da449a17eaf8"}},{"_id":{"$oid":"6504c39b22a4da449a17eb02"}},{"_id":{"$oid":"6504c39b22a4da449a17eb01"}},{"_id":{"$oid":"6504c39b22a4da449a17eb8d"}},{"_id":{"$oid":"6504c39b22a4da449a17eb8e"}},{"_id":{"$oid":"6504c39b22a4da449a17eb8f"}},{"_id":{"$oid":"6504c39b22a4da449a17ece6"}},{"_id":{"$oid":"6504c39b22a4da449a17ecfd"}},{"_id":{"$oid":"6504c39b22a4da449a17eddf"}},{"_id":{"$oid":"6504c39b22a4da449a17ef54"}}]

// 8. Recupere os estudantes do turno “Vespertino” ( NOME_TURNO_CURSO_BOLSA ) que estavam participando do programa no
// ano de “2009” ( ANO_CONCESSAO_BOLSA ), porém, limite a quantidade de documentos de resposta em 5;

db.users.find({ NOME_TURNO_CURSO_BOLSA: "Vespertino", ANO_CONCESSAO_BOLSA: 2009 }).limit(5)

// [{"_id":{"$oid":"6504c39b22a4da449a17e6d3"}},{"_id":{"$oid":"6504c39b22a4da449a17e709"}},{"_id":{"$oid":"6504c39b22a4da449a17e70a"}},{"_id":{"$oid":"6504c39b22a4da449a17e784"}},{"_id":{"$oid":"6504c39b22a4da449a17e785"}}]

// 9. Considere os IDs abaixo:
// a. ID_1: 6504c39e22a4da449a1a5bf9
// b. ID_2: 6504c39822a4da449a15fed3
// c. ID_3: 6504c3bb22a4da449a333a20
// Recupere os documentos através dos IDs e coloque em ordem crescente:

db.users.find({ _id: { $in: ["6504c39e22a4da449a1a5bf9", "6504c39822a4da449a15fed3", "6504c3bb22a4da449a333a20"] } }).sort({ _id: 1 })

// 0

// 10. Recupere todos os documentos em que as instituições de ensino ( NOME_IES_BOLSA ) comecem com “ uni ”, porém
// apresente como resultado, apenas as chaves e valores “ ANO_CONCESSAO_BOLSA ”, “ TIPO_BOLSA ” e
// “ MUNICIPIO_BENEFICIARIO_BOLSA ”:

db.users.find({ NOME_IES_BOLSA: { $in: [/^uni/] } }, { ANO_CONCESSAO_BOLSA: 1, TIPO_BOLSA: 1, MUNICIPIO_BENEFICIARIO_BOLSA: 1 })

// 0

// 11. Verifique se há algum documento sem a chave e valores de “ CODIGO_EMEC_IES_BOLSA ”;

db.users.find({ CODIGO_EMEC_IES_BOLSA: { $exists: false } })

// 0