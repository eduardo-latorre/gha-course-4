FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -f requirements.txt

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]