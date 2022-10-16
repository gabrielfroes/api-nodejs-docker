# API em Node.js para uso em Container Docker

## Objetivo

Exemplo simples e didático de como rodar uma aplicação **Node.js** dentro de um container **Docker** para complementar a explicação em vídeo no **[Código Fonte TV](https://youtube.com/codigofontetv)**.

## Instalação do Docker (CentOS)

Utilizamos em nosso exemplo uma distribuição Linux do CentOS. Siga as instruções para instação do Docker e do Docker Compose

1 - Instalação de pacotes importantes antes do docker

```shell
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

2 - Adiciona o repositório oficial do Docker na configuração

```shell
sudo yum-config-manager  --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

3 - Agora sim, vamos instalar o Docker

```shell
sudo yum install docker-ce
```

4 - Precisamos colocar o Docker para rodar

```shell
sudo systemctl enable docker
sudo systemctl start docker
```

5 - Verificar se está tudo bem com o processo

```shell
sudo systemctl status docker
```

6 - Rodar uma imagem de teste para ver se está tudo OK realmente

```shell
sudo docker run hello-world
```

## Instalação do Docker Compose

7 - Baixar pelo curl para a pasta /bin/docker-compose

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

8 - Dar direito de execução

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

9 - Criar um link simbólico para uso

```shell
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

10 - Testar pra ver se está tudo funcionando

```shell
sudo docker-compose --version
```

## Instruções Extras

- Para acessar o painel de configuração do LiteSpeed utilize _https://seuip:1080_

- Para definir o usuário e senha de acesso ao painel do LiteSpeed

```shell
cd /usr/local/lsws/admin/misc
./admpass.sh
```

## Autores

- **Gabriel Froes** - _Initial work_ - [Twitter](https://www.twitter.com/gabrielfroes)
- **Vanessa Weber** - _Initial work_ - [Twitter](https://www.twitter.com/nessaweberfroes)

## Youtube Channel

![YouTube Channel Subscribers](https://img.shields.io/youtube/channel/subscribers/UCFuIUoyHB12qpYa8Jpxoxow?style=social)

## Licença

Esse projeto está sob a licença [GNU General Public License](https://opensource.org/licenses/GPL-3.0).
